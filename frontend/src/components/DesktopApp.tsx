import { css } from '@emotion/css';
import Sidebar from './sidebar/organisms/Sidebar';
import ContactBar from './contact-bar/organisms/ContactBar';
import ConversationView from './conversation-view/organisms/ConversationView';
import DirectoryBar from './directory-bar/organisms/DirectoryBar';

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
