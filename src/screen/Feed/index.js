import { StyleSheet, Text, View } from 'react-native'
import Search from '../../components/Search'

export default function Watchlist() {
  return (
    <View style={styles.container}>
      <Search placeholder="Search Movie" onSearch={(s) => console.log(s)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
