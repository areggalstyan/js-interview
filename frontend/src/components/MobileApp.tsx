import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ContactBar from './contact-bar/organisms/ContactBar';
import PositionContainer from './atoms/containers/PositionContainer';
import FlexContainer from './atoms/containers/FlexContainer';
import ImageButton from './atoms/ImageButton';
import sidebar from '../images/sidebar.svg';
import Sidebar from './sidebar/organisms/Sidebar';
import contactBar from '../images/contact-bar.svg';
import conversationView from '../images/conversation-view.svg';
import ConversationView from './conversation-view/organisms/ConversationView';
import directoryBar from '../images/directory-bar.svg';
import DirectoryBar from './directory-bar/organisms/DirectoryBar';
import { css } from '@emotion/css';

function MobileApp() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(<ContactBar />);

  return (
    <div
      className={css`
        display: flex;
        position: absolute;
        inset: 0;
        bottom: 96px;
      `}
    >
      {selected}
      <PositionContainer width="100%" type="fixed" bottom="0">
        <FlexContainer
          gap="24px"
          padding="24px"
          justify="space-evenly"
          align="center"
          boxShadow="0 0 24px 0 #00000014"
        >
          <ImageButton
            width="48px"
            height="48px"
            src={sidebar}
            alt={t('sidebar')}
            onClick={() => setSelected(<Sidebar />)}
          />
          <ImageButton
            width="48px"
            height="48px"
            src={contactBar}
            alt={t('contactBar')}
            onClick={() => setSelected(<ContactBar />)}
          />
          <ImageButton
            width="48px"
            height="48px"
            src={conversationView}
            alt={t('conversationView')}
            onClick={() => setSelected(<ConversationView />)}
          />
          <ImageButton
            width="48px"
            height="48px"
            src={directoryBar}
            alt={t('directoryBar')}
            onClick={() => setSelected(<DirectoryBar />)}
          />
        </FlexContainer>
      </PositionContainer>
    </div>
  );
}

export default MobileApp;
