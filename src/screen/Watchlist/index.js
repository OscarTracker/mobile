import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import Nominee from '../../components/Nominee'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import { getMovies, getGroup } from '../../apis/firebase'
import { getMovie, getImage } from '../../apis/tmdb'

export default function Watchlist({ navigation }) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [group, setGroup] = useState(null)

  useEffect(async () => {
    const fetchData = async () => {
      const movies = await getMovies()
      let newData = movies
      newData.forEach(async (movie) => {
        const dados = await getMovie(movie.imdbId)
        movie.extraData = dados
        movie.name = dados.title
      })
      setData(newData)
      setFilteredData(newData)
    }

    const fetchGroupsData = async () => {
      const response = await getGroup('LP73MFa0s3RpeZwlsony')
      setGroup(response)
    }

    await fetchGroupsData()
    await fetchData()
  }, [])

  const handleMovie = (movie, watchers) => {
    navigation.navigate('Movie', {
      movieInfo: movie,
      watchersInfo: watchers,
    })
  }

  const getWatchers = (movieId) => {
    const watchers = []
    group?.members.forEach((element) => {
      if (element.watchedMovies.includes(movieId)) watchers.push(element)
    })
    return watchers
  }

  const renderItem = ({ item }) => {
    const watchers = getWatchers(item.imdbId)
    return (
      <Nominee
        image={{ uri: getImage(item.extraData?.poster_path) }}
        key={item.imdbId}
        title={item.name}
        onPress={() => handleMovie(item, watchers)}
        watchers={watchers}
        subtitle={`${item.nominations?.length} ${
          item.nominations?.length === 1 ? 'nomination' : 'nominations'
        }`}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header>Watch List</Header>
      <View style={styles.content}>
        <SearchBar setData={setFilteredData} data={data} />
        <View style={styles.itens}>
          <FlatList
            style={styles.list}
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.imdbId}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
    justifyContent: 'center',
  },
  itens: {
    flex: 1,
    paddingTop: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
  },
  input: {
    marginHorizontal: 20,
  },
  title: {
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 30,
    fontWeight: '400',
    color: 'white',
    paddingVertical: 20,
  },
})
