import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native'
import { useState } from 'react'
import NominationCaroussel from '../../components/NominationCaroussel'
import SubHeader from '../../components/SubHeader'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/Header'

export default function Feed() {
  const [data, setData] = useState([
    {
      cattegory: 'Best Picture',
      small: false,
      nominees: [
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
      ],
    },
    {
      cattegory: 'Best Actor',
      small: true,
      nominees: [
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
        {
          image:
            'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pTieUAFyDbC22uq0p7uMT1wBYax.jpg',
        },
      ],
    },
  ])
  const [filteredData, setFilteredData] = useState([])

  const renderItem = ({ item }) => {
    return (
      <View>
        <SubHeader
          content={data}
          title={item.cattegory}
          small
          onPress={() => console.log(item.small)}
        />
        <NominationCaroussel content={item.nominees} small={item.small} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header>Watch List</Header>
      <View style={styles.content}>
        <SearchBar data={data} setData={setData} />
        <View style={styles.itens}>
          <FlatList
            style={styles.list}
            data={data}
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
  scrollableContainer: {
    width: '100%',
  },
})
