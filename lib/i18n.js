import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../public/locales/en/common.json';
import translationTH from '../public/locales/th/common.json';

const resources = {
  en: {
    translation: translationEN,
  },
  th: {
    translation: translationTH,
  },
};

// ตรวจสอบว่าอยู่ใน Browser หรือไม่
const language = typeof window !== 'undefined' ? (localStorage.getItem('language') || 'en') : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
