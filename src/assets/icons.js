import Svg, { Path } from 'react-native-svg'

function Oscar({ color, ...rest }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...rest}>
      <Path
        fill={color}
        d="M7.5 17.8h8.105V22H7.5v-4.2zM13.579 17.777l.33-6.153.973-1.761V5.119l-2.13-.751h-2.42l-2.129.751v4.744l.972 1.761.33 6.153h4.074z"
      />
      <Path
        fill={color}
        d="M13.703 2.466c0 1.362-.972 2.466-2.171 2.466-1.2 0-2.171-1.104-2.171-2.466S10.333 0 11.532 0c1.199 0 2.171 1.104 2.171 2.466z"
      />
    </Svg>
  )
}

function FingersCrossed({ color, ...rest }) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/Svg"
      {...rest}
    >
      <Path
        d="M7.45509 20.2125C5.75783 19.0352 5.11759 17.1403 4.9672 16.2465C4.86408 15.6493 4.86408 12.0313 4.9672 11.6832C5.19064 10.9313 5.77501 10.3469 6.52697 10.1235C6.72462 10.0676 7.02541 10.0547 8.36603 10.0547C9.86134 10.0547 9.98166 10.059 10.132 10.1364C10.4758 10.3125 10.6563 10.6133 10.6563 11C10.6563 11.3953 10.4758 11.6875 10.0977 11.8852C9.96017 11.9582 9.81408 11.9668 8.46486 11.9797C7.18869 11.9926 6.97384 12.0055 6.90939 12.0614C6.84064 12.1215 6.83205 12.2246 6.83205 12.9508C6.83205 13.7114 6.84064 13.7887 6.93517 14.0164C7.05548 14.3129 7.24455 14.5536 7.46798 14.7125C7.56251 14.777 8.16837 15.052 8.81291 15.3227C9.46173 15.5934 10.0762 15.8684 10.1836 15.9286C10.682 16.2164 11.1977 16.7321 11.4856 17.2305C11.7391 17.6688 11.9453 18.4078 11.9453 18.8633C11.9453 19.0223 11.9711 19.1039 12.0442 19.1899C12.1774 19.3446 12.3965 19.3532 12.5168 19.2028C12.5899 19.1125 12.5985 19.0567 12.577 18.6914C12.4867 17.2563 11.6102 15.9243 10.3297 15.284C10.1621 15.1981 9.60353 14.9532 9.0922 14.7426C7.9965 14.2828 7.92345 14.2485 7.76447 14.0981C7.52384 13.8789 7.47658 13.72 7.47658 13.1485V12.6328H8.5422C9.68087 12.6328 10.0848 12.5942 10.3813 12.461C10.6477 12.345 11.0215 11.9754 11.159 11.6918C11.2664 11.477 11.2793 11.4039 11.2793 11C11.2793 10.4543 11.2063 10.261 10.8582 9.89144L10.6262 9.64652L10.841 9.05355C10.9613 8.73129 11.0688 8.46488 11.0817 8.46488C11.0945 8.46488 11.2965 8.9848 11.5285 9.62074L11.9453 10.7766V11.477C11.9496 12.6758 12.0442 13.0325 12.4824 13.445C12.809 13.7543 13.0367 13.8489 13.5137 13.8703C14.0078 13.8918 14.2914 13.793 14.6309 13.4836L14.8672 13.2688L15.1035 13.4836C15.4387 13.793 15.7223 13.8918 16.2207 13.8703C16.5945 13.8575 16.6375 13.8446 17.0715 13.6297C17.093 13.6211 17.1016 14.1883 17.0887 14.893C17.0672 16.2551 17.05 16.4055 16.818 17.1231C16.6762 17.57 16.3496 18.2403 16.066 18.67C15.7824 19.0953 14.9145 19.9719 14.4805 20.2684C13.8188 20.7196 13.0195 21.059 12.216 21.2352C11.6402 21.3598 10.4672 21.3684 9.90431 21.2567C8.99767 21.0719 7.83504 20.4761 7.45509 20.2125Z"
        fill={color}
      />
      <Path
        d="M11.8981 2.01097C12.0141 2.07972 12.1473 2.21722 12.2203 2.33754C12.4695 2.73714 12.4953 2.63402 11.1934 6.21761L10.0332 9.41019H9.01486C8.45197 9.41019 7.9922 9.3973 7.9922 9.38441C7.9922 9.33714 10.493 2.47503 10.5531 2.35902C10.6348 2.19144 10.9399 1.94652 11.1203 1.89496C11.3652 1.82621 11.6789 1.87347 11.8981 2.01097Z"
        fill={color}
      />
      <Path
        d="M7.88048 0.696131C7.98791 0.730505 8.134 0.825035 8.25001 0.945349C8.43048 1.12582 8.46916 1.21175 8.90744 2.41058L9.3672 3.68675L8.86447 5.06605C8.58947 5.8266 8.35314 6.44535 8.33595 6.44535C8.29298 6.44535 6.64728 1.87777 6.63009 1.6973C6.59572 1.4266 6.68595 1.17308 6.88791 0.958239C7.16291 0.670347 7.49806 0.584412 7.88048 0.696131Z"
        fill={color}
      />
      <Path
        d="M14.0121 7.85472C14.1582 7.92777 14.2914 8.04379 14.3731 8.1598L14.502 8.34457L14.5149 10.4457C14.5235 12.4524 14.5235 12.5512 14.4418 12.7059C14.2656 13.0539 13.9649 13.2344 13.5781 13.2344C13.1914 13.2344 12.8906 13.0539 12.7145 12.7059C12.6376 12.5602 12.6331 12.4641 12.64 10.7766C12.6405 10.6725 12.6409 10.5623 12.6414 10.4457L12.6543 8.34457L12.7832 8.1598C12.9551 7.91918 13.2988 7.73441 13.5781 7.73441C13.7199 7.73441 13.8531 7.77308 14.0121 7.85472Z"
        fill={color}
      />
      <Path
        d="M16.5902 9.14379C16.7363 9.21683 16.8695 9.33285 16.9512 9.44886L17.0801 9.63363L17.093 11.0903C17.1059 12.461 17.1016 12.5555 17.0199 12.7059C16.8438 13.0539 16.5473 13.2344 16.1563 13.2344C15.7652 13.2344 15.4731 13.0539 15.284 12.6973C15.1981 12.5383 15.1895 12.4524 15.1766 11.3567C15.1594 10.0246 15.1895 9.68949 15.3699 9.43597C15.5332 9.20824 15.8813 9.02347 16.1563 9.02347C16.2981 9.02347 16.4313 9.06214 16.5902 9.14379Z"
        fill={color}
      />
    </Svg>
  )
}

export { FingersCrossed, Oscar }
