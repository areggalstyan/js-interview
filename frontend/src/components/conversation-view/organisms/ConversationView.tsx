import FlexContainer from '../../atoms/containers/FlexContainer';
import SelectedConversation from './SelectedConversation';
import { useAppSelector } from '../../../state/hooks';
import NoConversationSelected from '../molecules/NoConversationSelected';

function ConversationView() {
  const selectedConversation = useAppSelector(({ chat }) => chat.selectedConversation);

  return (
    <FlexContainer height="100%" direction="column" grow={1}>
      {selectedConversation ? <SelectedConversation /> : <NoConversationSelected />}
    </FlexContainer>
  );
}

export default ConversationView;
