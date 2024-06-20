import DesktopApp from './components/DesktopApp';
import MobileApp from './components/MobileApp';
import BreakpointContainer from './components/atoms/containers/BreakpointContainer';

function App() {
  return (
    <>
      <BreakpointContainer type="max" width="1279px">
        <DesktopApp />
      </BreakpointContainer>
      <BreakpointContainer type="min" width="1280px">
        <MobileApp />
      </BreakpointContainer>
    </>
  );
}

export default App;
