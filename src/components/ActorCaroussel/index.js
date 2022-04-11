import { StyleSheet, FlatList } from 'react-native'
import { getImage } from '../../apis/tmdb'
import theme from '../../assets/theme'
import ActorCard from '../ActorCard'

export default function ActorCaroussel({ content }) {
  const renderItem = ({ item, index }) => {
    return (
      <ActorCard
        index={index}
        character={item.character}
        name={item.name}
        image={{
          uri: getImage(item.profile_path),
        }}
      />
    )
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={content}
      renderItem={(item, index) => renderItem(item, index)}
      keyExtractor={(item) => item.credit_id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  showMore: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    flex: 1,
    backgroundColor: theme.colors.spoiler,
    borderRadius: 10,
  },

  showMoreText: {
    color: theme.colors.text,
  },
})
