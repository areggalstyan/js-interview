import React from 'react';
import { css } from '@emotion/css';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import { useAppSelector } from '../../state/hooks';
import Contact from './Contact';
import { Conversation } from '../../conversation';

function Contacts() {
  const conversations: Conversation[] = useAppSelector(state =>
    state.conversations.filter(({ messages }) => messages.some(message => message.text.includes(state.search))));

  return (
    <div className={css`
      width: 349px;
      height: 100%;
      box-shadow: 1px 0 0 0 #00000014;
    `}>
      <TopBar />
      <SearchBar />
      {conversations.map((conversation, index) =>
        <Contact conversation={conversation} key={index} />)}
    </div>
  );
}

export default Contacts;
