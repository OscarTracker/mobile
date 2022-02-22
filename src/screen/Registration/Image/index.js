import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import theme from '../../../assets/theme'
import * as ImagePicker from 'expo-image-picker'

import Icons from '../../../components/Icons'
import Button from '../../../components/Button'

import { signUp } from '../../../../firebase'

export default function RegistrationImage({ route, navigation }) {
  const [image, setImage] = useState(null)

  const handleFinish = async () => {
    const { email, password, name, nickname } = route.params
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <SafeAreaView style={styles.container} behavior='padding'>
      <View style={styles.header}>
        <Text style={styles.title}>
          Now let’s wrap it up with a cool profile picture, feel free to use any
          image
        </Text>
      </View>

      <TouchableOpacity onPress={pickImage} style={styles.image}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Icons
            width={34}
            height={34}
            name='camera'
            color={theme.colors.primary}
          />
        )}
      </TouchableOpacity>

      <View>
        <Button
          style={styles.button}
          title='Skip'
          bordered
          onPress={() => handleFinish()}
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
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 174,
    height: 174,
    borderRadius: 500,
    backgroundColor: theme.colors.spoiler,
  },
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
