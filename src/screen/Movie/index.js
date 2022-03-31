import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Animated,
} from 'react-native'
import { useState, useEffect } from 'react'
import theme from '../../assets/theme'

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
    'Best Live Action Short Film',
    'Best Documentary Feature',
    'Best Costume Design',
    'Best Actress in a Supporting Role',
    'Best Makeup and Hairstyling',
    'Best Sound',
    'Best Original Song',
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
  }, [setData])

  return <SafeAreaView style={styles.container}></SafeAreaView>
}

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    padding: 20,
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
