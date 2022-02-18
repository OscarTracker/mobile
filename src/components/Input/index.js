import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function Input({ leftIcon, rightIcon, ...props }) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <Icons color={theme.colors.border} width={16} name={leftIcon} />
      )}
      <TextInput
        {...props}
        placeholderTextColor={theme.colors.border}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 14,
    maxWidth: '100%',
    paddingHorizontal: 16,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: theme.colors.border,
  },
})

Input.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  onSearch: undefined,
  placeholder: undefined,
}
