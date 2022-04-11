import { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function Input({
  leftIcon,
  inputStyle,
  style,
  password,
  simplified,
  disabled,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(password)
  const [focused, setFocused] = useState(false)

  const getStyle = () => {
    if (simplified) return [styles.container, styles.simplifiedContainer, style]
    if (focused)
      return [
        styles.container,
        styles.defaultContainer,
        styles.focusedContainer,
        style,
      ]
    return [styles.container, styles.defaultContainer, style]
  }
  const getInputStyle = () => {
    return [styles.input, inputStyle]
  }

  return (
    <View style={getStyle()}>
      {leftIcon && <Icons style={styles.leftIcon} width={16} name={leftIcon} />}

      <TextInput
        secureTextEntry={showPassword}
        placeholderTextColor={theme.colors.border}
        style={getInputStyle()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />

      {password && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icons
            style={styles.rightIcon}
            width={20}
            name={showPassword ? 'eye' : 'eye-off'}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    height: 44,
    flex: 1,
    color: theme.colors.text,
  },
  defaultContainer: {
    borderColor: theme.colors.border,
    borderWidth: 0.5,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  simplifiedContainer: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: 10,
  },
  focusedContainer: {
    borderColor: theme.colors.primary,
  },
  leftIcon: {
    color: theme.colors.border,
    marginRight: 10,
  },
  rightIcon: {
    color: theme.colors.border,
    marginLeft: 10,
  },
})

Input.propTypes = {
  leftIcon: PropTypes.string,
  inputStyle: PropTypes.object,
  style: PropTypes.object,
}

Input.defaultProps = {
  leftIcon: undefined,
  inputStyle: undefined,
  style: undefined,
}
