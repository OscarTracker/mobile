import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import theme from '../../assets/theme'
import * as ExpoImagePicker from 'expo-image-picker'

import Icons from '../Icons'

export default function ImagePicker({ image, setImage, disabled }) {
  const pickImage = async () => {
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={pickImage}
      style={styles.image}
    >
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
      {image && !disabled && (
        <View style={styles.editButton}>
          <Icons
            width={25}
            height={25}
            name='pencil'
            color={theme.colors.spoiler}
          />
        </View>
      )}
    </TouchableOpacity>
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
  editButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.primary,
    borderRadius: 500,
    padding: 10,
    right: 0,
  },
})
