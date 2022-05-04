import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
} from 'react-native'
import Nominee from '../../components/Nominee'
import Input from '../../components/Input'
import { useState, useEffect } from 'react'
import { getMovies, getGroup } from '../../apis/firebase'

import { getMovie, getImage } from '../../apis/tmdb'

export default function Watchlist({ navigation }) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')
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

  const handleSearch = (text) => {
    setSearch(text)
    if (text === '') {
      setFilteredData(data)
      return
    }
    const formattedQuery = text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')

    const newFilteredData = data.filter((nominee) => {
      return nominee.name
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .includes(formattedQuery)
    })

    setFilteredData(newFilteredData)
  }

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

  let AnimatedHeaderValue = new Animated.Value(0)
  const Header_Max_Heigth = 100
  const Header_Min_Heigth = 75

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Heigth - Header_Min_Heigth],
    outputRange: [Header_Max_Heigth, Header_Min_Heigth],
    extrapolate: 'clamp',
  })

  const animateFontSize = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Heigth - Header_Min_Heigth],
    outputRange: [30, 20],
    extrapolate: 'clamp',
  })

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
      <Animated.View style={[styles.header, { height: animateHeaderHeight }]}>
        <Animated.Text style={[styles.title, { fontSize: animateFontSize }]}>
          Watch List
        </Animated.Text>
      </Animated.View>
      <View style={styles.content}>
        <Input
          style={styles.input}
          onChangeText={(text) => handleSearch(text)}
          value={search}
          leftIcon={'search'}
          rightIcon={'search'}
          placeholder='Search Movie'
        />
        <View style={styles.itens}>
          <FlatList
            style={styles.list}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: AnimatedHeaderValue } },
                },
              ],
              { useNativeDriver: false }
            )}
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
