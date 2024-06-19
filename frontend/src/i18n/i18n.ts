import i18n from 'i18next';
import resources from './resources.json';
import { initReactI18next } from 'react-i18next';

const defaultLng = 'en';
const storedLng = localStorage.getItem('lng');
let currentLng = storedLng || defaultLng;

if (!storedLng) {
  localStorage.setItem('lng', defaultLng);
}

i18n.use(initReactI18next).init({
  resources,
  lng: currentLng,
  interpolation: {
    escapeValue: false
  }
});

export const toggleLanguage = () => {
  currentLng = currentLng === 'en' ? 'hy' : 'en';
  i18n.changeLanguage(currentLng);
  localStorage.setItem('lng', currentLng);
};

export default i18n;
