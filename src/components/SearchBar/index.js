import { StyleSheet } from 'react-native'
import { useState } from 'react'
import Input from '../Input'

export default function SearchBar({ data, setData }) {
  const [search, setSearch] = useState('')

  const handleSearch = (text) => {
    setSearch(text)
    if (text === '') {
      setData(data)
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

    setData(newFilteredData)
  }

  return (
    <Input
      style={styles.input}
      onChangeText={(text) => handleSearch(text)}
      value={search}
      leftIcon={'search'}
      rightIcon={'search'}
      placeholder='Search Movie'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
  },
})
