import { StyleSheet, View, Button, Text } from 'react-native'

import { signOut, useAuth } from '../../../firebase'

export default function Account({ navigation }) {
  const currentUser = useAuth()
  const logOut = () => {
    signOut()
    navigation.navigate('Authentication')
  }
  return (
    <View style={styles.container}>
      <Text>email: {currentUser?.email}</Text>
      <Button title='logout' onPress={() => logOut()}></Button>
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
