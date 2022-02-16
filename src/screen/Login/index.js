import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native'

import { signUp, signIn, useAuth } from '../../../firebase'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const currentUser = useAuth()

  useEffect(() => {
    if (currentUser) navigation.navigate('Home')
  })

  const handleLogin = () => {
    signIn(email, password)
  }

  const handleSignUp = async () => {
    signUp(email, password)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder='Email'
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        type={'password'}
        placeholder='Password'
      />

      <Button title='Login' onPress={() => handleLogin()} />
      <Button title='Register' onPress={() => handleSignUp()} />
      <Button title='Teste' onPress={() => console.log(currentUser)} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    width: 300,
  },
})
