import { StyleSheet, View, Text, Image } from 'react-native'
import theme from '../../assets/theme'

export default function ActorCard({ name, character, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.texts}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.character}>{character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.spoiler,
    borderRadius: 10,
    width: 140,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 140,
    height: 184,
  },
  texts: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    color: theme.colors.text,
    lineHeight: 18,
    marginBottom: 6,
  },
  character: {
    color: theme.colors.subText,
    fontSize: 14,
    lineHeight: 14,
  },
})
