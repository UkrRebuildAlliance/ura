import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en } from './i18n/en';
import { ua } from './i18n/ua';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    supportedLngs: ['ua', 'en'],
    fallbackLng: 'ua',
    detection: {
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
