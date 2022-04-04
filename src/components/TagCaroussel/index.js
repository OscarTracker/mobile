import { StyleSheet, ScrollView } from 'react-native'
import Tag from '../Tag'

export default function TagCaroussel({ content, withImages }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {content.map((item, index) => (
        <Tag
          key={index}
          index={index}
          title={item.name}
          leftImage={
            withImages && {
              uri: item.image,
            }
          }
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
