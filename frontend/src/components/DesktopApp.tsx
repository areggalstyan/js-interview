import { css } from '@emotion/css';
import Sidebar from './organisms/Sidebar';
import ContactBar from './organisms/ContactBar';
import ConversationView from './organisms/ConversationView';
import DirectoryBar from './organisms/DirectoryBar';

function DesktopApp() {
  return (
    <div
      className={css`
        display: flex;
        position: absolute;
        inset: 0;
      `}
    >
      <Sidebar />
      <ContactBar />
      <ConversationView />
      <DirectoryBar />
    </div>
  );
}

export default DesktopApp;
