import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function Input({ leftIcon, inputStyle, style, ...props }) {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && (
        <Icons color={theme.colors.border} width={16} name={leftIcon} />
      )}
      <TextInput
        {...props}
        placeholderTextColor={theme.colors.border}
        style={[styles.input, inputStyle]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.input,
    borderRadius: 14,
    maxWidth: '100%',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: theme.colors.border,
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
