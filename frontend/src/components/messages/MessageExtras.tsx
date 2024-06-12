import React from 'react';
import { css } from '@emotion/css';
import { Message } from '../../conversation';
import MessageActions from './MessageActions';
import { useTranslation } from 'react-i18next';

function MessageExtras({ message, isMine }: { message: Message, isMine: boolean }) {
  const { t } = useTranslation();

  return (
    <span className={css`
      font-weight: 600;
      font-size: 10px;
      line-height: 18px;
      margin-left: 10px;
      color: ${isMine ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
      float: right;
    `}>
      {t('added')} {new Date(message.dateAdded).toISOString()}<br />
      {t('edited')} {new Date(message.dateEdited).toISOString()}<br />
      {isMine ? <MessageActions message={message} /> : ''}
    </span>
  );
}

export default MessageExtras;
