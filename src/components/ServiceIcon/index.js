import Disney from '../../assets/services/disney.svg'
import Globo from '../../assets/services/globo.svg'
import Hbo from '../../assets/services/hbo.svg'
import Imdb from '../../assets/services/imdb.svg'
import Netflix from '../../assets/services/netflix.svg'
import Prime from '../../assets/services/prime.svg'
import Rotten from '../../assets/services/rotten.svg'
import Star from '../../assets/services/star.svg'
import Starz from '../../assets/services/starz.svg'
import Apple from '../../assets/services/apple.svg'
import Telecine from '../../assets/services/telecine.svg'

import QuestionMark from '../../assets/icons/questionMark.svg'
import None from '../../assets/icons/none.svg'

export default function Icons({ name, ...props }) {
  switch (name) {
    case 'disney':
      return <Disney {...props} />

    case 'globo':
      return <Globo {...props} />

    case 'hbo':
      return <Hbo {...props} />

    case 'imdb':
      return <Imdb {...props} />

    case 'netflix':
      return <Netflix {...props} />

    case 'prime':
      return <Prime {...props} />

    case 'rotten':
      return <Rotten {...props} />

    case 'star':
      return <Star {...props} />

    case 'starz':
      return <Starz {...props} />

    case 'telecine':
      return <Telecine {...props} />

    case 'apple':
      return <Apple {...props} />

    case 'none':
      return <None />

    default:
      return <QuestionMark {...props} />
  }
}
