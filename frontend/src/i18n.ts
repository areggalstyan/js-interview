import i18n from 'i18next';
import resources from './resources.json';
import { initReactI18next } from 'react-i18next';

if (localStorage.getItem('lng') === null) {
  localStorage.setItem('lng', 'en');
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng')!,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
