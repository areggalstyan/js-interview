import React from 'react';
import { css } from '@emotion/css';
import { useAppSelector } from '../../state/hooks';
import SelectedConversation from './SelectedConversation';
import NoConversationSelected from './NoConversationSelected';

function Messages() {
  const currentConversation: string = useAppSelector(state => state.currentConversation)!;

  return (
    <div className={css`
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      box-shadow: 1px 0 0 0 #00000014;
    `}>
      {currentConversation ? <SelectedConversation /> : <NoConversationSelected />}
    </div>
  );
}

export default Messages;
