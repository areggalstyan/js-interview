import React from 'react';
import { css } from '@emotion/css';
import Sidebar from './components/sidebar/Sidebar';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className={css`
      position: absolute;
      inset: 0;
      display: flex;
    `}>
      <Sidebar />
      <Contacts />
    </div>
  );
}

export default App;
