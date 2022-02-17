import { Avatar, Icon } from 'react-native-elements'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Oscar } from '../../assets/icons'
import PropTypes from 'prop-types'
import Toggle from '../Toggle'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SkeletonContent from 'react-native-skeleton-content'

export default function Nominee({
  checked,
  image,
  isLoading,
  predict,
  subtitle,
  title,
  watchers,
  ...rest
}) {
  return (
    <SkeletonContent
      containerStyle={{ flex: 1, flexDirection: 'row', borderRadius: 20 }}
      isLoading={isLoading}
      boneColor="#2C2C2C"
      highlightColor="#454545"
      layout={[
        { key: 'someId', width: '100%', height: 130, marginBottom: 20 },
        // {
        //   key: 'someId2',
        //   width: 10,
        //   height: 158,
        //   marginBottom: 20,
        //   marginLeft: 20,
        // },
      ]}
    >
      <TouchableOpacity style={styles.view} {...rest}>
        <View style={styles.image}>
          <ImageBackground
            source={image}
            style={{ width: '100%', height: '100%' }}
            imageStyle={{ borderRadius: 12 }}
          >
            {checked && (
              <View style={styles.checked}>
                <Icon name="check-circle" color="white" />
              </View>
            )}
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <View>
            <Text numberOfLines={2} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View style={styles.watchers}>
            {predict ? (
              <View style={styles.toggles}>
                <Toggle label="I wish" icon="fingersCrossed" />
                <Toggle label="I bet" icon="oscar" />
              </View>
            ) : (
              watchers.map((watcher, i) => (
                <Avatar
                  // key={`${watcher}-${i}`}
                  containerStyle={styles.avatar}
                  size={42}
                  rounded
                  source={watcher}
                />
              ))
            )}
          </View>
        </View>
      </TouchableOpacity>
    </SkeletonContent>
  )
}

const styles = StyleSheet.create({
  checked: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 12,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingLeft: 20,
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  watchers: {
    marginTop: 12,
    flexDirection: 'row',
  },
  image: {
    maxHeight: 158,
    maxWidth: 109,
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 12,
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '100',
  },
  avatar: {
    marginRight: 16,
  },
  toggles: {
    // flexDirection: 'row',
  },
})

Nominee.propTypes = {
  isLoading: PropTypes.bool,
}

Nominee.defaultProps = {
  isLoading: false,
}
