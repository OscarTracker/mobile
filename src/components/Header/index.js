import { StyleSheet, Animated, View, Text } from 'react-native'

export default function Header({ children, callback }) {
  let AnimatedHeaderValue = new Animated.Value(0)
  const Header_Max_Heigth = 100
  const Header_Min_Heigth = 75

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Heigth - Header_Min_Heigth],
    outputRange: [Header_Max_Heigth, Header_Min_Heigth],
    extrapolate: 'clamp',
  })

  const animateFontSize = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Heigth - Header_Min_Heigth],
    outputRange: [30, 20],
    extrapolate: 'clamp',
  })

  const getValue = () => {
    callback(
      Animated.event(
        [
          {
            nativeEvent: { contentOffset: { y: AnimatedHeaderValue } },
          },
        ],
        { useNativeDriver: false }
      )
    )
  }

  return (
    <Animated.View style={[styles.header, { height: animateHeaderHeight }]}>
      <Animated.Text style={[styles.title, { fontSize: animateFontSize }]}>
        {children}
      </Animated.Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    justifyContent: 'center',
  },
  title: {
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: '400',
    color: 'white',
    paddingVertical: 20,
  },
})
