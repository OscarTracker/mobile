import { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function Input({
  leftIcon,
  inputStyle,
  style,
  password,
  simplified,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(password)

  const getStyle = () => {
    if (simplified) return [styles.container, styles.simplifiedContainer, style]
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
    maxWidth: '100%',
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 16,
    flex: 1,
    color: theme.colors.text,
  },
  defaultContainer: {
    backgroundColor: theme.colors.input,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  simplifiedContainer: {
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: 10,
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
