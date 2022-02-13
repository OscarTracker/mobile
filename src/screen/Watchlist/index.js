import { StyleSheet, View } from 'react-native'
import Nominee from '../../components/Nominee'
import kratos from '../../assets/avatar.jpg'
import power from '../../assets/power.png'
import space from '../../assets/space.jpg'

export default function Feed() {
  return (
    <View style={styles.container}>
      <Nominee
        image={power}
        watchers={[kratos, space]}
        title="The Power of The Dog"
        subtitle="12 nominations"
        // Pra colocar o toggle, porem o estilo ta fudido :/ por causa dos icons acho, mas n arrumei
        // predict

        // Marca checked o nominee
        // checked
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
