import { FlatList, View } from 'react-native'
import Nomination from '../Nomination'

export default function NominationCaroussel({ content, small }) {
  const renderItem = ({ item, index }) => {
    return (
      <Nomination
        image={{ uri: item.image }}
        checked={item.checked}
        index={index}
        small={small}
      />
    )
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={content}
      renderItem={(item, index) => renderItem(item, index)}
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      ListHeaderComponent={() => <View style={{ width: 20 }} />}
      ListFooterComponent={() => <View style={{ width: 20 }} />}
    />
  )
}
