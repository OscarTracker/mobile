import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import theme from '../../assets/theme'

export default function SubText({ content }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  content: {
    textAlign: 'justify',
    color: theme.colors.subText,
    fontSize: 18,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
})
