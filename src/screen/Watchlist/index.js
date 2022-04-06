import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Animated,
} from 'react-native'
import Nominee from '../../components/Nominee'
import Input from '../../components/Input'
import { useState, useEffect } from 'react'
import { getMovies } from '../../apis/firebase'
import theme from '../../assets/theme'

import { getMovie, getImageURL } from '../../apis/tmdb'

export default function Watchlist({ navigation }) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(async () => {
    const fetchData = async () => {
      const movies = await getMovies()
      let newData = movies
      newData.forEach(async (movie) => {
        const dados = await getMovie(movie.imdbId)
        movie.image = getImageURL() + dados.poster_path
      })
      setData(newData)
      setFilteredData(newData)
    }

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

  const handleMovie = (movie) => {
    navigation.navigate('Movie', {
      movieInfo: movie,
    })
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
    return (
      <Nominee
        image={{ uri: item.image }}
        key={item.imdbId}
        title={item.name}
        onPress={() => handleMovie(item)}
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
      <View>
        <View style={styles.content}>
          <Input
            onChangeText={(text) => handleSearch(text)}
            value={search}
            leftIcon={'search'}
            rightIcon={'search'}
            placeholder='Search Movie'
          />
          <View style={styles.itens}>
            <FlatList
              scrollEventThrottle={1}
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 30,
    justifyContent: 'center',
  },
  itens: {
    paddingTop: 20,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
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
