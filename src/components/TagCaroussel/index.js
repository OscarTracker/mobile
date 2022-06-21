import { FlatList, View } from 'react-native'
import Tag from '../Tag'

export default function TagCaroussel({ content, withImages }) {
  const renderItem = ({ item }) => {
    return (
      <Tag
        title={item.name}
        leftImage={
          withImages && {
            uri: item.avatar,
          }
        }
      />
    )
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={content}
      renderItem={(item) => renderItem(item)}
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      ListHeaderComponent={() => <View style={{ width: 20 }} />}
      ListFooterComponent={() => <View style={{ width: 20 }} />}
    />
  )
}
