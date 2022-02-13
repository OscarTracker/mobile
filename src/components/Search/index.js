import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types'
import theme from '../../assets/theme'

export default function Search({ onSearch, placeholder, ...rest }) {
  const [search, setSearch] = useState('')

  const updateSearch = (search) => {
    setSearch(search)
    onSearch(search)
  }

  return (
    <View style={styles.view}>
      <SearchBar
        containerStyle={{
          backgroundColor: theme.colors.background,
          padding: 0,
          borderBottomColor: 'transparent',
          borderTopColor: 'transparent',
          paddingHorizontal: 20, // change here
        }}
        onChangeText={updateSearch}
        placeholder={placeholder}
        round
        value={search}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
})

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
}

Search.defaultProps = {
  onSearch: undefined,
  placeholder: undefined,
}
