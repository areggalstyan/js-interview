import React from 'react';
import { css } from '@emotion/css';
import { useTranslation } from 'react-i18next';

function NoConversationSelected() {
  const { t } = useTranslation();

  return (
    <div className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    `}>
      <span className={css`
        font-weight: 600;
        font-size: 40px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.4);
      `}>
        {t('selectAConversation')}
      </span>
    </div>
  );
}

export default NoConversationSelected;
