import { FlatList, View } from 'react-native'
import { getImage } from '../../apis/tmdb'
import ActorCard from '../ActorCard'

export default function ActorCaroussel({ content }) {
  const renderItem = ({ item }) => {
    return (
      <ActorCard
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
      renderItem={(item, index) => renderItem(item)}
      keyExtractor={(item) => item.credit_id}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      ListHeaderComponent={() => <View style={{ width: 20 }} />}
      ListFooterComponent={() => <View style={{ width: 20 }} />}
    />
  )
}
