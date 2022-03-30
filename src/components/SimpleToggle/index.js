import { useRef } from 'react'
import { StyleSheet, Pressable, Animated } from 'react-native'
import theme from '../../assets/theme'

export default function SimpleToggle({ active, setActive, disabled }) {
  const tabOffsetValue = useRef(new Animated.Value(0)).current

  const getWidth = () => {
    if (active) return 19
    return 0
  }

  const toggle = () => {
    if (!disabled) {
      Animated.spring(tabOffsetValue, {
        toValue: getWidth(),
        useNativeDriver: true,
      }).start()

      setActive(!active)
    }
  }

  return (
    <Pressable style={styles.container} onPress={() => toggle()}>
      <Animated.View
        style={[
          styles.focused,
          {
            left: getWidth(),
            backgroundColor: active
              ? theme.colors.primary
              : theme.colors.disabled,
            transform: [
              {
                translateX: tabOffsetValue,
              },
            ],
          },
        ]}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.spoiler,
    width: 44,
    height: 25,
    borderRadius: 30,
    padding: 3,
  },
  focused: {
    width: 19,
    height: 19,
    borderRadius: 30,
  },
})
