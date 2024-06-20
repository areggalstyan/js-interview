import FlexContainer from '../atoms/containers/FlexContainer';
import MessageBar from '../molecules/MessageBar';
import MessageList from '../molecules/MessageList';
import UserBar from './UserBar';
import StatusBar from '../molecules/StatusBar';

function SelectedConversation() {
  return (
    <>
      <UserBar />
      <StatusBar />
      <FlexContainer width="100%" grow={1} direction="column">
        <MessageList />
        <MessageBar />
      </FlexContainer>
    </>
  );
}

export default SelectedConversation;
