import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import theme from '../../assets/theme'

export default function Tag({ leftImage, rightImage, title, onPress, style }) {
  const getContainerStyle = () => {
    if (rightImage) return [styles.container, styles.rightImage, style]
    if (leftImage) return [styles.container, styles.leftImage, style]
    return [styles.container, styles.noImage, style]
  }
  return onPress ? (
    <TouchableOpacity style={getContainerStyle()} onPress={onPress}>
      {leftImage && <Image style={styles.image} source={leftImage} />}
      <Text style={styles.title}>{title}</Text>
      {rightImage && <Image style={styles.image} source={rightImage} />}
    </TouchableOpacity>
  ) : (
    <View style={getContainerStyle()}>
      {leftImage && <Image style={styles.image} source={leftImage} />}
      <Text style={styles.title}>{title}</Text>
      {rightImage && <Image style={styles.image} source={rightImage} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 50,
  },
  rightImage: {
    paddingRight: 10,
    paddingLeft: 16,
  },
  leftImage: {
    paddingRight: 16,
    paddingLeft: 10,
  },
  noImage: {
    paddingHorizontal: 16,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 18,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 20,
    marginRight: 10,
  },
})
