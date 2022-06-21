import { Avatar, Icon } from 'react-native-elements'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { ImageBackground } from 'react-native'
import theme from '../../assets/theme'

export default function Nominee({
  checked,
  image,
  subtitle,
  title,
  watchers,
  ...props
}) {
  const getImage = () => {
    if (image) {
      return (
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={styles.imageBorder}
        >
          {checked && (
            <View style={styles.checked}>
              <Icon name='check-circle' color='white' />
            </View>
          )}
        </ImageBackground>
      )
    } else {
      return (
        <ImageBackground style={styles.image}>
          {checked && (
            <View style={styles.checked}>
              <Icon name='check-circle' color='white' />
            </View>
          )}
        </ImageBackground>
      )
    }
  }
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.image}>{getImage()}</View>
      <View style={styles.content}>
        <View>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {watchers && (
          <View style={styles.watchers}>
            {watchers.map((watcher) => (
              <Avatar
                key={watcher.uid}
                containerStyle={styles.avatar}
                size={40}
                rounded
                source={{ uri: watcher.avatar }}
              />
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  imageBorder: {
    borderRadius: 12,
  },
  checked: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  watchers: {
    marginTop: 12,
    flexDirection: 'row',
  },
  image: {
    maxHeight: 158,
    backgroundColor: theme.colors.spoiler,
    borderRadius: 10,
    maxWidth: 109,
    width: '100%',
    height: '100%',
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colors.subText,
    fontSize: 14,
    fontWeight: '100',
  },
  avatar: {
    marginRight: 16,
  },
})

Nominee.propTypes = {
  isLoading: PropTypes.bool,
}

Nominee.defaultProps = {
  isLoading: false,
}
