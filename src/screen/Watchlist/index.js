import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Nominee from '../../components/Nominee'
import kratos from '../../assets/avatar.jpg'
import power from '../../assets/power.png'
import space from '../../assets/space.jpg'
import nominees from '../../../movies.json'
import Search from '../../components/Search'
import { useState } from 'react'
import filter from 'lodash.filter'

export default function Feed() {
  const [data, setData] = useState(nominees)
  const [filteredData, setFilteredData] = useState(nominees)

  const handleSearch = (text) => {
    if (text === '') {
      setFilteredData(data)
      return
    }
    const formattedQuery = text.toLowerCase()

    const newFilteredData = filter(data, (nominee) => {
      return nominee.name.toLowerCase().includes(formattedQuery)
    })

    setFilteredData(newFilteredData)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Watch List</Text>
      <Search
        onClear={() => setData(nominees)}
        onSearch={handleSearch}
        placeholder="Search Movie"
      />
      <FlatList
        data={filteredData}
        keyExtractor={(nominee) => nominee.movie}
        renderItem={({ item }) => (
          <Nominee
            // key={item.name}
            image={power}
            watchers={[kratos, space]}
            title={item.name}
            subtitle={`${item.nominations.length} ${
              item.nominations.length === 1 ? 'Nomination' : 'Nominations'
            }`}

            // MUDAR AQUI P VER O SKELETON
            // isLoading

            // Pra colocar o toggle, porem o estilo ta fudido :/ por causa dos icons acho, mas n arrumei
            // predict

            // Marca checked o nominee
            // checked
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
    paddingVertical: 20,
  },
})
