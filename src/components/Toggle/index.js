import { FingersCrossed, Oscar } from '../../assets/icons'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import theme from '../../assets/theme'

export default function Toggle({ active, icon, label, onToggle, ...rest }) {
  const fStyles = styles({ active })
  const activeStyle = active ? theme.colors.text : theme.colors.primary

  return (
    <TouchableOpacity onPress={onToggle} style={fStyles.toggle} {...rest}>
      {icon === 'oscar' ? (
        <Oscar color={activeStyle} />
      ) : (
        <FingersCrossed color={activeStyle} />
      )}
      <Text style={fStyles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = (props) =>
  StyleSheet.create({
    toggle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: props.active
        ? theme.colors.primary
        : theme.colors.transparent,
      paddingVertical: 8,
      paddingHorizontal: 30,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    text: {
      fontSize: 24,
      color: props.active ? theme.colors.text : theme.colors.primary,
      paddingLeft: 8,
    },
  })

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
}

Toggle.defaultProps = {
  active: false,
  label: undefined,
  icon: undefined,
  onToggle: undefined,
}
