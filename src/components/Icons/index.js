import Search from '../../assets/icons/search.svg'
import CheckFilled from '../../assets/icons/checkFilled.svg'
import Check from '../../assets/icons/check.svg'
import HomeFilled from '../../assets/icons/homeFilled.svg'
import Home from '../../assets/icons/home.svg'
import PersonFilled from '../../assets/icons/personFilled.svg'
import Person from '../../assets/icons/person.svg'
import QuestionMark from '../../assets/icons/questionMark.svg'

export default function Icons({ name, filled, color, ...props }) {
  switch (name) {
    case 'search':
      return <Search style={{ color: color }} {...props} />

    case 'check':
      if (filled) return <CheckFilled style={{ color: color }} {...props} />
      else return <Check style={{ color: color }} {...props} />

    case 'home':
      if (filled) return <HomeFilled style={{ color: color }} {...props} />
      else return <Home style={{ color: color }} {...props} />

    case 'person':
      if (filled) return <PersonFilled style={{ color: color }} {...props} />
      else return <Person style={{ color: color }} {...props} />

    default:
      return <QuestionMark style={{ color: color }} {...props} />
  }
}
