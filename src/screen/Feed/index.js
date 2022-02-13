import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Toggle from '../../components/Toggle'

export default function Watchlist() {
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)

  return (
    <View style={styles.container}>
      <Toggle
        active={active}
        label='Toggle'
        onPress={() => setActive(!active)}
        icon='fingersCrossed'
      />
      <Toggle
        active={active2}
        label='Toggle'
        onPress={() => setActive2(!active2)}
        icon='oscar'
      />
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
