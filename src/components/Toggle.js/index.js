import { FingersCrossed, Oscar } from '../../assets/icons'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default function Toggle({ active, icon, label, ...rest }) {
  const fStyles = styles({ active })
  const activeStyle = active ? 'white' : '#F7B239'

  return (
    <TouchableOpacity style={fStyles.toggle} {...rest}>
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
      backgroundColor: props.active ? '#F7B239' : 'transparent',
      paddingVertical: 8,
      paddingHorizontal: 30,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: '#F7B239',
    },
    text: {
      fontSize: 24,
      color: props.active ? 'white' : '#F7B239',
      paddingLeft: 8,
    },
  })

Toggle.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

Toggle.defaultProps = {
  active: false,
  label: undefined,
  icon: undefined,
}
