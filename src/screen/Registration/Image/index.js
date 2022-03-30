import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import theme from '../../../assets/theme'

import ImagePicker from '../../../components/ImagePicker'

import Button from '../../../components/Button'

import { signUp } from '../../../../firebase'

export default function RegistrationImage({ route, navigation }) {
  const [image, setImage] = useState(null)
  const { email, password, name, nickname } = route.params

  const handleSkip = async () => {
    signUp(email, password, name, nickname)
    navigation.navigate('Home')
  }

  const handleFinish = async () => {
    signUp(email, password, name, nickname, image)
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container} behavior='padding'>
      <View style={styles.header}>
        <Text style={styles.title}>
          Now let’s wrap it up with a cool profile picture, feel free to use any
          image
        </Text>
      </View>

      <ImagePicker image={image} setImage={setImage} />

      <View>
        <Button
          style={styles.button}
          title='Skip'
          bordered
          onPress={() => handleSkip()}
        />
        <Button
          style={styles.button}
          title='Finish'
          onPress={() => handleFinish()}
        />
      </View>
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
