import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Keyboard } from 'react-native'
import theme from '../../../assets/theme'

import Button from '../../../components/Button'
import Input from '../../../components/Input'

export default function RegistrationEmail({ navigation }) {
  const [email, setEmail] = useState('')
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
    navigation.navigate('RegistrationPassword', {
      email: email,
    })
  }

  return (
    <SafeAreaView style={styles.container} behavior='padding'>
      <View style={styles.header}>
        <Text style={styles.title}>Give us your best email!</Text>
      </View>
      <Input
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        simplified
        placeholder='email'
        autoCapitalize='none'
      />

      {!keyboardVisible && (
        <Button
          disabled={email.length === 0}
          style={styles.button}
          title='Next'
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
