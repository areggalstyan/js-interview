import React from 'react';
import { css } from '@emotion/css';
import TopBar from './TopBar';
import SearchBar from './SearchBar';

function Contacts() {
  return (
    <div className={css`
      width: 349px;
      height: 100%;
      box-shadow: 1px 0 0 0 #00000014;
    `}>
      <TopBar />
      <SearchBar />
    </div>
  );
}

export default Contacts;
