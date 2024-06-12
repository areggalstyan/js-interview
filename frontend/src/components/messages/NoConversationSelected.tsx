import React from 'react';
import { css } from '@emotion/css';

function NoConversationSelected() {
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
        Select a conversation
      </span>
    </div>
  );
}

export default NoConversationSelected;
