import React, { useState } from 'react';
import { css } from '@emotion/css';
import Sidebar from './components/sidebar/Sidebar';
import Contacts from './components/contacts/Contacts';
import Messages from './components/messages/Messages';
import Directory from './components/directory/Directory';
import Icon from './components/Icon';
import bars from './images/expand.svg';
import { useTranslation } from 'react-i18next';

enum Expansion {
  Sidebar,
  Contacts,
  None
}

function App() {
  const [expansion, setExpansion] = useState(Expansion.None);
  const { t } = useTranslation();

  return (
    <div className={css`
      position: absolute;
      inset: 0;
      display: flex;
    `}>
      <div className={css`
        @media (max-width: 1024px) {
          display: ${expansion === Expansion.Sidebar ? 'flex' : 'none'};
        }
      `}>
        <Sidebar />
      </div>
      <div className={css`
        @media (max-width: 1024px) {
          display: ${expansion === Expansion.Contacts ? 'flex' : 'none'};
          position: absolute;
          top: 0;
          bottom: 0;
          background-color: white;
          z-index: 999;
        }
      `}>
        <Contacts />
      </div>
      <div className={css`
        position: absolute;
        bottom: calc(25% - 24px);
        left: 20px;
        z-index: 999;

        @media (min-width: 1025px) {
          display: none;
        }
      `}>
        <Icon size={48} src={bars} alt={t('expand')} onClick={() => setExpansion((expansion + 1) % 3)} />
      </div>
      <Messages />
      <div className={css`
        @media (max-width: 1366px) {
          display: none;
        }
      `}>
        <Directory />
      </div>
    </div>
  );
}

export default App;
