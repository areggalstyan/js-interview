import React from 'react';
import { css } from '@emotion/css';
import { Message } from '../../conversation';
import MessageActions from './MessageActions';

function MessageExtras({ message, isMine }: { message: Message, isMine: boolean }) {
  return (
    <span className={css`
      font-weight: 600;
      font-size: 10px;
      line-height: 18px;
      margin-left: 10px;
      color: ${isMine ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)'};
      float: right;
    `}>
      Added {new Date(message.dateAdded).toISOString()}<br />
      Edited {new Date(message.dateEdited).toISOString()}<br />
      {isMine ? <MessageActions message={message} /> : ''}
    </span>
  );
}

export default MessageExtras;
