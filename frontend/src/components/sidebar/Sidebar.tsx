import React from 'react';
import { css } from '@emotion/css';
import home from './icons/home.svg';
import messages from './icons/messages.svg';
import audio from './icons/audio.svg';
import search from './icons/search.svg';
import calendar from './icons/calendar.svg';
import settings from './icons/settings.svg';
import Logo from './Logo';
import Icon from '../Icon';

function Sidebar() {
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
        <Icon size={24} src={home} alt='Home' />
        <Icon size={24} src={messages} alt='Messages' />
        <Icon size={24} src={audio} alt='Audio' />
        <Icon size={24} src={search} alt='Search' />
        <Icon size={24} src={calendar} alt='Calendar' />
        <div className={css`
          margin-top: auto;
        `}>
          <Icon size={24} src={settings} alt='Settings' />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;