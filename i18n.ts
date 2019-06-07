import NextI18Next from 'next-i18next'
import axios from 'axios';

const createLoadPath = () => {
  return "https://files-getv0601p.now.sh/"
};

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  backend: {
    loadPath: createLoadPath,
    ajax: axios,
  }
})

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withNamespaces,
} = NextI18NextInstance
