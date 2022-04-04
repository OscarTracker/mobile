import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import theme from '../../assets/theme'

export default function Tag({ leftImage, rightImage, title, onPress, index }) {
  return onPress ? (
    <TouchableOpacity
      style={[styles.container, index == 0 && { marginLeft: 0 }]}
      onPress={onPress}
    >
      {leftImage && <Image style={styles.image} source={leftImage} />}
      <Text style={styles.title}>{title}</Text>
      {rightImage && <Image style={styles.image} source={rightImage} />}
    </TouchableOpacity>
  ) : (
    <View style={[styles.container, index == 0 && { marginLeft: 0 }]}>
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
    paddingHorizontal: 16,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10,
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
