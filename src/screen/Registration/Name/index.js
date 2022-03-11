import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Keyboard } from 'react-native'
import theme from '../../../assets/theme'

import Button from '../../../components/Button'
import Input from '../../../components/Input'

export default function RegistrationName({ route, navigation }) {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
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
    const { email, password } = route.params
    navigation.navigate('RegistrationImage', {
      email: email,
      password: password,
      name: name,
      nickname: nickname,
    })
  }

  return (
    <SafeAreaView style={styles.container} behavior='padding'>
      <View style={styles.header}>
        <Text style={styles.title}>How would you like to be called?</Text>
      </View>

      <View style={styles.inputs}>
        <Input
          style={styles.input}
          onChangeText={setName}
          value={name}
          simplified
          placeholder='name'
          autoCapitalize='none'
        />
        <Input
          style={styles.input}
          onChangeText={setNickname}
          value={nickname}
          simplified
          placeholder='nickname'
          autoCapitalize='none'
        />
      </View>

      {!keyboardVisible && (
        <Button
          style={styles.button}
          title='Next'
          disabled={nickname.length === 0 || name.length === 0}
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
  inputs: {
    width: '100%',
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
