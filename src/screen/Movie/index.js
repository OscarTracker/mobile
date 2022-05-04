import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { useState, useEffect } from 'react'
import theme from '../../assets/theme'
import { cattegories } from '../../assets/data'

import Icons from '../../components/Icons'
import TagCaroussel from '../../components/TagCaroussel'
import ActorCaroussel from '../../components/ActorCaroussel'
import SubHeader from '../../components/SubHeader'
import SubText from '../../components/SubText'
import ServiceIcon from '../../components/ServiceIcon'
import { getCast, getImage, getVideos } from '../../apis/tmdb'
import { setMovieUnwatched, setMovieWatched } from '../../apis/firebase'
import { useUserContext } from '../../context/UserContext'

export default function Movie({ navigation, route }) {
  const [name, setName] = useState('')
  const [plot, setPlot] = useState()
  const [poster, setPoster] = useState(null)
  const [nominations, setNominations] = useState([])
  const [trailer, setTrailer] = useState('https://www.youtube.com/watch?v=')
  const [cast, setCast] = useState([])
  const [imdbRating, setImdbRating] = useState(3)
  const [imdbLink, setImdbLink] = useState('https://www.imdb.com/title/')

  const [watched, setWatched] = useState(false)
  const [watchedBy, setWatchedBy] = useState([])

  const { user, setUser } = useUserContext()

  useEffect(() => {
    const setDetails = () => {
      const data = route.params.movieInfo
      setName(data.extraData.title)
      setPlot(data.extraData.overview)
      setPoster(data.extraData.poster_path)

      setImdbRating(data.extraData.vote_average)
      setImdbLink(`https://www.imdb.com/title/${data.extraData.imdb_id}`)

      let moviesWatched = user.watchedMovies || []
      if (moviesWatched?.includes(data.imdbId)) setWatched(true)

      let nominations = []
      data.nominations.forEach((element) => {
        nominations.push({
          id: element,
          name: cattegories[element],
        })
      })
      setNominations(nominations)

      setWatchedBy(route.params.watchersInfo)
    }

    const fetchData = async () => {
      const response = await getCast(route.params.movieInfo?.imdbId)
      setCast(response.cast)
    }

    const fetchTrailer = async () => {
      const response = await getVideos(route.params.movieInfo?.imdbId)
      const videos = response.results
      videos.forEach((element) => {
        if (element.type === 'Trailer' && element.site === 'YouTube') {
          setTrailer(`https://www.youtube.com/watch?v=${element.key}`)
          return
        }
      })
      if (!trailer) setTrailer(null)
    }

    setDetails()
    fetchData()
    fetchTrailer()
  }, [])

  const markWatched = async () => {
    const movieId = route.params.movieInfo?.imdbId
    let moviesWatched = user.watchedMovies || []
    let newUser = user

    if (!watched) {
      await setMovieWatched(user.uid, movieId)
      moviesWatched.push(movieId)
      newUser.watchedMovies = moviesWatched
      setUser(newUser)
    } else {
      await setMovieUnwatched(user.uid, movieId)
      let newMoviesWatched = moviesWatched.filter((item) => item != movieId)
      newUser.watchedMovies = newMoviesWatched
      setUser(newUser)
    }
    setWatched(!watched)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollableContainer}>
        <Image
          style={styles.image}
          source={{
            uri: getImage(poster),
          }}
        />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity
            style={styles.ratingItem}
            onPress={() => Linking.openURL(imdbLink)}
          >
            <ServiceIcon name='imdb' width={36} height={36} />
            <Text style={styles.rating}>{imdbRating}/10</Text>
          </TouchableOpacity>

          {/* TODO 

          implement rottenTomatoes api call to get ratings, waiting for Rotten Tomatoes® Developer Network approval
        

          <TouchableOpacity style={styles.ratingItem}>
            <ServiceIcon name='rotten' width={36} height={36} />
            <Text style={styles.rating}>{rottenRating}%</Text>
          </TouchableOpacity>

            */}

          {trailer && (
            <TouchableOpacity
              style={styles.ratingItem}
              onPress={() => Linking.openURL(trailer)}
            >
              <Icons name='movie' width={36} height={36} />
              <Text style={styles.rating}>Trailer</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.watched} onPress={() => markWatched()}>
          <Text style={styles.watchedTitle}>
            {watched ? 'Mark as Unwatched' : 'Mark as Watched'}
          </Text>
        </TouchableOpacity>

        <SubHeader title={'Nominations'} />
        <TagCaroussel content={nominations} />

        <SubHeader title={'Watched by'} />
        <TagCaroussel content={watchedBy} withImages />

        <SubHeader title={'Plot'} />
        <SubText content={plot} />

        <SubHeader title={'Cast'} />

        <ActorCaroussel content={cast} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  scrollableContainer: {
    width: '100%',
  },
  image: {
    alignSelf: 'center',
    width: 289,
    height: 428,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    paddingVertical: 24,
  },
  ratingContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  ratingItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.spoiler,
    width: 68,
    height: 84,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  rating: {
    color: theme.colors.text,
    fontSize: 14,
  },
  watched: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.spoiler,
    width: 197,
    height: 42,
    borderRadius: 8,
    marginTop: 20,
  },
  watchedTitle: {
    color: theme.colors.text,
    fontSize: 18,
  },
})
