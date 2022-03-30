import { TouchableOpacity } from 'react-native'
import theme from '../../assets/theme'
import Icons from '../Icons'

export default function IconButton({
  name,
  color = theme.colors.primary,
  disabled,
  ...props
}) {
  return (
    <TouchableOpacity {...props} disabled={disabled}>
      <Icons color={color} width={24} name={name} />
    </TouchableOpacity>
  )
}
