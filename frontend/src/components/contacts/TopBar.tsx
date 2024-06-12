import React from 'react';
import { css } from '@emotion/css';
import more from '../../images/more.svg';
import add from '../../images/add.svg';
import Icon from '../Icon';
import MessageCounter from './MessageCounter';
import { useTranslation } from 'react-i18next';

function TopBar() {
  const { t } = useTranslation();

  return (
    <div className={css`
      height: 89px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      padding: 24px;
      display: flex;
    `}>
      <h3 className={css`
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        align-items: center;
      `}>
        {t('messages')}
        <span className={css`margin-left: 6px;`}>
          <Icon size={16} src={more} alt={t('more')} />
        </span>
        <MessageCounter />
      </h3>
      <div className={css`margin-left: auto;`}>
        <Icon size={40} src={add} alt={t('add')} />
      </div>
    </div>
  );
}

export default TopBar;
