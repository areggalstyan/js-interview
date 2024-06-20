import i18n from 'i18next';
import resources from './resources.json';
import { initReactI18next } from 'react-i18next';
import { lsGetOrCompute, lsSet } from '../localStorage';

const defaultLng = 'en';
let currentLng = lsGetOrCompute('lng', () => defaultLng);

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
  lsSet('lng', currentLng);
};

export default i18n;
