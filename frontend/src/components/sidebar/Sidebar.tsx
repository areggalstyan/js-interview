import React from 'react';
import { css } from '@emotion/css';
import home from '../../images/home.svg';
import messages from '../../images/messages.svg';
import audio from '../../images/audio.svg';
import search from '../../images/search.svg';
import calendar from '../../images/calendar.svg';
import settings from '../../images/settings.svg';
import Logo from './Logo';
import Icon from '../Icon';
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = async () => {
    const newLng = localStorage.getItem('lng') === 'en' ? 'hy' : 'en';
    localStorage.setItem('lng', newLng);
    await i18n.changeLanguage(newLng);
  };

  return (
    <div className={css`
      width: 88px;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 48px;
      align-items: center;
      padding: 16px;
      box-shadow: 0 0 24px 0 #00000014;
    `}>
      <Logo />
      <div className={css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 32px;
      `}>
        <Icon size={24} src={home} alt={t('home')} />
        <Icon size={24} src={messages} alt={t('messages')} />
        <Icon size={24} src={audio} alt={t('audio')} />
        <Icon size={24} src={search} alt={t('search')} />
        <Icon size={24} src={calendar} alt={t('calendar')} />
        <div className={css`margin-top: auto;`}>
          <Icon size={24} src={settings} alt={t('settings')} onClick={changeLanguage} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
