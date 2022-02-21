import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function Button({
  leftIcon = 'none',
  rightIcon = 'none',
  title,
  textStyle,
  style,
  filled = true,
  bordered,
  ...props
}) {
  const getStyle = () => {
    if (bordered) return [styles.container, styles.borderedContainer, style]
    if (filled) return [styles.container, styles.filledContainer, style]
  }
  const getTextStyle = () => {
    if (bordered) return [styles.text, styles.borderedText, textStyle]
    if (filled) return [styles.text, styles.filledText, textStyle]
  }

  const getColor = () => {
    if (bordered) return theme.colors.primary
    if (filled) return theme.colors.text
  }
  return (
    <TouchableOpacity style={getStyle()} {...props}>
      <Icons color={getColor()} width={16} name={leftIcon} />
      <Text style={getTextStyle()}>{title}</Text>
      <Icons color={getColor()} width={16} name={rightIcon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '100%',
    maxHeight: '100%',
    width: 240,
    height: 44,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 14,
  },
  text: {
    fontSize: 18,
  },
  filledContainer: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  filledText: {
    color: theme.colors.text,
  },
  borderedContainer: {
    borderColor: theme.colors.primary,
  },
  borderedText: {
    color: theme.colors.primary,
  },
})
