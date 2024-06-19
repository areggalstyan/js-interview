import DesktopApp from './components/DesktopApp';
import { css } from '@emotion/css';
import MobileApp from './components/MobileApp';

function App() {
  return (
    <>
      <div
        className={css`
          display: block;

          @media (max-width: 1280px) {
            display: none;
          }
        `}
      >
        <DesktopApp />
      </div>
      <div
        className={css`
          display: none;

          @media (max-width: 1280px) {
            display: block;
          }
        `}
      >
        <MobileApp />
      </div>
    </>
  );
}

export default App;
