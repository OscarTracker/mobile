import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Toggle from './src/components/Toggle.js'

export default function App() {
  const [active, setActive] = useState(false)
  const [active2, setActive2] = useState(false)

  // Example
  return (
    <View style={styles.container}>
      <StatusBar style={'dark'} />
      <Toggle
        active={active}
        label="Toggle"
        onToggle={() => setActive(!active)}
        icon="fingersCrossed"
      />
      <Text>OI JOAO</Text>
      <Toggle
        active={active2}
        label="Toggle"
        onToggle={() => setActive2(!active2)}
        icon="oscar"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
  },
})
