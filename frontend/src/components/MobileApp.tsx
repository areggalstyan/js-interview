import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ContactBar from './organisms/ContactBar';
import PositionContainer from './atoms/containers/PositionContainer';
import FlexContainer from './atoms/containers/FlexContainer';
import ImageButton from './atoms/ImageButton';
import Sidebar from './organisms/Sidebar';
import ConversationView from './organisms/ConversationView';
import DirectoryBar from './organisms/DirectoryBar';
import { css } from '@emotion/css';
import { contactBar, conversationView, directoryBar, sidebar } from '../images/images';

function MobileApp() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(<ContactBar />);

  return (
    <div
      className={css`
        display: flex;
        position: absolute;
        inset: 0;
        bottom: 72px;
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
            width="24px"
            height="24px"
            src={sidebar}
            alt={t('sidebar')}
            onClick={() => setSelected(<Sidebar />)}
          />
          <ImageButton
            width="24px"
            height="24px"
            src={contactBar}
            alt={t('contactBar')}
            onClick={() => setSelected(<ContactBar />)}
          />
          <ImageButton
            width="24px"
            height="24px"
            src={conversationView}
            alt={t('conversationView')}
            onClick={() => setSelected(<ConversationView />)}
          />
          <ImageButton
            width="24px"
            height="24px"
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
