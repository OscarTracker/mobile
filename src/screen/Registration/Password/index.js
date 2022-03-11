import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Keyboard } from 'react-native'
import theme from '../../../assets/theme'

import Button from '../../../components/Button'
import Input from '../../../components/Input'

export default function RegistrationPassword({ route, navigation }) {
  const [password, setPassword] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(undefined)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const handleNext = async () => {
    const { email } = route.params
    navigation.navigate('RegistrationName', {
      email: email,
      password: password,
    })
  }

  return (
    <SafeAreaView style={styles.container} behavior='padding'>
      <View style={styles.header}>
        <Text style={styles.title}>How about some security?</Text>
      </View>

      <Input
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        simplified
        password
        placeholder='password'
        autoCapitalize='none'
      />

      {!keyboardVisible && (
        <Button
          style={styles.button}
          title='Next'
          disabled={password.length === 0}
          onPress={() => handleNext()}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 34,
  },
  header: {
    marginTop: 70,
    width: '100%',
  },
  button: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: theme.colors.text,
  },
})
