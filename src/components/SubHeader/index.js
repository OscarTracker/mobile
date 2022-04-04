import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import theme from '../../assets/theme'

export default function SubHeader({ title, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onPress && (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.seeMore}>see more</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    color: theme.colors.text,
  },
  seeMore: {
    fontSize: 12,
    color: theme.colors.subText,
  },
  button: {
    alignSelf: 'center',
  },
})
