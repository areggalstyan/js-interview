import React from 'react';
import { css } from '@emotion/css';
import { Conversation } from '../../conversation';
import profile from '../../images/profile.svg';
import { useAppDispatch } from '../../state/hooks';

function Contact({ conversation }: { conversation: Conversation }) {
  const dispatch = useAppDispatch();
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <div className={css`
      height: 93px;
      padding: 12px 28px;
      display: flex;
      gap: 16px;

      :hover {
        cursor: pointer;
      }
    `} onClick={() => dispatch({ type: 'currentConversation/selectConversation', payload: conversation.name })}>
      <img src={profile} alt='' width={48} height={48} />
      <div className={css`
        flex-grow: 1;
      `}>
        <div className={css`
          display: flex;
        `}>
          <h3 className={css`
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
          `}>{conversation.name}</h3>
          <span className={css`
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            margin-left: auto;
            color: rgba(0, 0, 0, 0.3);
          `}>{new Date(Date.now() - lastMessage.dateAdded).getMinutes()}m</span>
        </div>
        <p className={css`
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.4);
        `}>{lastMessage.text}</p>
      </div>
    </div>
  );
}

export default Contact;
