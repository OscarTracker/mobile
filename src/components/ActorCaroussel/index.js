import { StyleSheet, ScrollView } from 'react-native'
import ActorCard from '../ActorCard'

export default function ActorCaroussel({ content }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {content.map((item, index) => (
        <ActorCard
          key={index}
          index={index}
          character={item.character}
          name={item.name}
          image={{
            uri: item.image,
          }}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
})
