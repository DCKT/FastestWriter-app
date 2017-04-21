import t from '../../locales/'
import fr from './fr'
import en from './en'

const langs = { fr, en }

export default () => {
  return langs[t.getLanguage()]
}