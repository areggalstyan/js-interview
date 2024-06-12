import React from 'react';
import { css } from '@emotion/css';
import { Message } from '../../conversation';
import profile from '../../images/profile.svg';
import MessageExtras from './MessageExtras';

export type ConversationMessageProps = {
  message: Message,
  displayProfile: boolean,
  isMine: boolean
};

function ConversationMessage({ message, displayProfile, isMine }: ConversationMessageProps) {
  return (
    <div className={css`
      display: flex;
      gap: 16px;
      ${isMine ? 'margin-left: auto;' : 'margin-right: auto; flex-direction: row-reverse;'}
      ${displayProfile ? 'margin-top: 22px;' : ''}
    `}>
      <div className={css`
        border-radius: 12px;
        padding: 8px 16px;
        background-color: ${isMine ? '#615ef0' : '#f1f1f1'};
        color: ${isMine ? 'white' : 'black'};
        font-size: 14px;
        line-height: 21px;
      `}>
        {message.text}<br />
        <MessageExtras message={message} isMine={isMine} />
      </div>
      {displayProfile
        ? <img src={profile} alt='' width={40} height={40} />
        : <div className={css`width: 40px;
                height: 40px;`} />}
    </div>
  );
}

export default ConversationMessage;
