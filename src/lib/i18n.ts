import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from '@/locales/resources';
import { config } from '@/config';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: config.i18n.fallbackLng,
    debug: config.i18n.debug,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    }
  });

export default i18n;