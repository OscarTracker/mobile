import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView, Image } from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import logomark from '../../../assets/logomark.png'

import { signIn, useAuth } from '../../apis/firebase'

import { useUserContext } from '../../context/UserContext'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useUserContext()

  useEffect(() => {
    if (user) navigation.navigate('Home')
  })

  const handleLogin = async () => {
    const data = await signIn(email, password)
    setUser(data)
    navigation.navigate('Home')
  }

  const handleSignUp = async () => {
    navigation.navigate('RegistrationEmail')
  }

  return (
    <SafeAreaView style={styles.container} behavior='padding'>
      <Image source={logomark} style={styles.image} />

      <View style={styles.inputs}>
        <Input
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
          autoCapitalize='none'
        />

        <Input
          onChangeText={setPassword}
          value={password}
          placeholder='Password'
          password
          autoCapitalize='none'
        />
      </View>

      <View style={styles.buttons}>
        <Button
          style={styles.button}
          title='Login'
          onPress={() => handleLogin()}
        />
        <Button bordered title='Register' onPress={() => handleSignUp()} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    width: '100%',
    marginBottom: 50,
  },
  input: {
    marginBottom: 26,
  },
  button: {
    marginBottom: 20,
  },
  image: {
    width: 206,
    height: 102,
    marginBottom: 115,
  },
})
