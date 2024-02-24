import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import LOCALS from 'i18n/constants'
import uk from "./translations/uk";
import cz from "./translations/cz";

const {CZ, UK} = LOCALS;

const resources = {
  [CZ]: {
    translation: cz
  },
  [UK]: {
    translation: uk
  }
};

i18n
.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: CZ, 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;