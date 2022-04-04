import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Animated,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import { useState, useEffect } from 'react'
import theme from '../../assets/theme'

import Icons from '../../components/Icons'
import TagCaroussel from '../../components/TagCaroussel'
import ActorCaroussel from '../../components/ActorCaroussel'
import SubHeader from '../../components/SubHeader'
import SubText from '../../components/SubText'
import ActorCard from '../../components/ActorCard'
import ServiceIcon from '../../components/ServiceIcon'

export default function Movie() {
  const [name, setName] = useState('The Power of the Dog')
  const [imdbRating, setImdbRating] = useState(3)
  const [rottenRating, setRottenRating] = useState(93)
  const [watched, setWatched] = useState(false)
  const [poster, setPoster] = useState(
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg'
  )
  const [plot, setPlot] = useState(
    'A domineering but charismatic rancher wages a war of intimidation on his click to seebrothers new wife and her teen son, until long-hidden secrets come to light.'
  )
  const [trailer, setTrailer] = useState(
    'https://www.youtube.com/watch?v=LRDPo0CHrko'
  )
  const [nominations, setNominations] = useState([
    {
      name: 'Best Live Action Short Film',
    },
    {
      name: 'Best Documentary Feature',
    },
    {
      name: 'Best Actress in a Supporting Role',
    },
    {
      name: 'Best Makeup and Hairstyling',
    },
    {
      name: 'Best Costume Design',
    },
    {
      name: 'Best Sound',
    },
  ])
  const [watchedBy, setWatchedBy] = useState([
    {
      name: 'Miguel',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fBEucxECxGLKVHBznO0qHtCGiMO.jpg',
    },
    {
      name: 'Sophia',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fBEucxECxGLKVHBznO0qHtCGiMO.jpg',
    },
    {
      name: 'Leo',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fBEucxECxGLKVHBznO0qHtCGiMO.jpg',
    },
  ])
  const [cast, setCast] = useState([
    {
      name: 'Benedict Cumberbatch',
      character: 'Phil Burbank',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fBEucxECxGLKVHBznO0qHtCGiMO.jpg',
    },
    {
      name: 'Kirsten Dunst',
      character: 'Rose Gordon-Burbank',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5dI5s8Oq2Ook5PFzTWMW6DCXVjm.jpg',
    },
    {
      name: 'Jesse Plemons',
      character: 'George Burbank',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ckTthGclQE0y6b7gR0RpRo7LskL.jpg',
    },
    {
      name: 'Kodi Smit-McPhee',
      character: 'Peter Gordon',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sesCWba9NwPDYDZzbVLs7OgLOti.jpg',
    },
  ])

  useEffect(() => {
    const fetchData = async () => {}
    fetchData()
  }, [])

  const markWatched = () => {
    setWatched(!watched)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollableContainer}>
        <Image
          style={styles.image}
          source={{
            uri: poster,
          }}
        />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.ratingContainer}>
          <TouchableOpacity style={styles.ratingItem}>
            <ServiceIcon name='imdb' width={36} height={36} />
            <Text style={styles.rating}>{imdbRating}/10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingItem}>
            <ServiceIcon name='rotten' width={36} height={36} />
            <Text style={styles.rating}>{rottenRating}%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ratingItem}>
            <Icons name='movie' width={36} height={36} />
            <Text style={styles.rating}>Trailer</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.watched} onPress={() => markWatched()}>
          <Text style={styles.watchedTitle}>
            {watched ? 'Mark as Watched' : 'Mark as Unwatched'}
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
