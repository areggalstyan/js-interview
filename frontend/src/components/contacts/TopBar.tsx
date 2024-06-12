import React from 'react';
import { css } from '@emotion/css';
import more from './icons/more.svg';
import add from './icons/add.svg';
import Icon from '../Icon';
import MessageCounter from './MessageCounter';

function TopBar() {
  return (
    <div className={css`
      height: 89px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding: 24px;
      display: flex;
    `}>
      <h2 className={css`
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        align-items: center;
      `}>
        Messages
        <button className={css`
          margin-left: 6px;
        `}>
          <img src={more} alt='More' />
        </button>
        <MessageCounter />
      </h2>
      <div className={css`
        margin-left: auto;
      `}>
        <Icon size={40} src={add} alt='Add' />
      </div>
    </div>
  );
}

export default TopBar;
