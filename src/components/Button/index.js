import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function Button({
  leftIcon = 'none',
  rightIcon = 'none',
  title,
  textStyle,
  style,
  disabled,
  bordered,
  ...props
}) {
  const getStyle = () => {
    if (disabled) return [styles.container, styles.disabledContainer, style]
    if (bordered) return [styles.container, styles.borderedContainer, style]
    return [styles.container, styles.filledContainer, style]
  }
  const getTextStyle = () => {
    if (disabled) return [styles.text, styles.disabledText, textStyle]
    if (bordered) return [styles.text, styles.borderedText, textStyle]
    return [styles.text, styles.filledText, textStyle]
  }

  const getColor = () => {
    if (disabled) return theme.colors.border
    if (bordered) return theme.colors.primary
    return theme.colors.text
  }
  return (
    <TouchableOpacity style={getStyle()} {...props} disabled={disabled}>
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
  disabledContainer: {
    backgroundColor: theme.colors.spoiler,
    borderColor: theme.colors.spoiler,
  },
  disabledText: {
    color: theme.colors.border,
  },
})
