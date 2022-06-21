import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icons from '../Icons'
import { ImageBackground } from 'react-native'
import theme from '../../assets/theme'

export default function Nomination({ checked, image, small, style, ...props }) {
  const getContainerStyle = () => {
    if (small) return [styles.actor, style]
    return [styles.container, style]
  }

  const getImage = () => {
    if (image) {
      return (
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={styles.imageBorder}
        >
          {checked && (
            <View style={styles.checked}>
              <Icons name='check' color='white' />
            </View>
          )}
        </ImageBackground>
      )
    } else {
      return (
        <ImageBackground style={styles.image}>
          {checked && (
            <View style={styles.checked}>
              <Icons name='check' color='white' />
            </View>
          )}
        </ImageBackground>
      )
    }
  }
  return (
    <TouchableOpacity style={getContainerStyle()}>
      {getImage()}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 174,
    width: 120,
  },
  actor: {
    height: 147,
    width: 102,
  },
  imageBorder: {
    borderRadius: 12,
  },
  checked: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
  },
  image: {
    backgroundColor: theme.colors.spoiler,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
})
