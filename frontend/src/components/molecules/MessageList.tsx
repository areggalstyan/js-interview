import FlexContainer from '../atoms/containers/FlexContainer';
import ScrollableContainer from '../atoms/ScrollableContainer';
import PositionContainer from '../atoms/containers/PositionContainer';
import GrowingContainer from '../atoms/containers/GrowingContainer';
import { useAppSelector } from '../../state/hooks';
import MessageView from '../organisms/MessageView';
import { getCurrentName } from '../../user';

function MessageList() {
  const messages = useAppSelector(({ chat }) => chat.selectedConversation!.messages);
  let isPreviousMine: boolean | undefined;

  return (
    <GrowingContainer width="100%">
      <PositionContainer type="absolute" top="0" right="0" bottom="0" left="0">
        <ScrollableContainer startAtBottom>
          <FlexContainer gap="10px" padding="24px" direction="column">
            {messages.map((message, index) => {
              let displayProfile = false;
              const isCurrentMine = message.name === getCurrentName();

              if (isPreviousMine !== isCurrentMine) {
                isPreviousMine = isCurrentMine;
                displayProfile = true;
              }

              return <MessageView {...message} displayProfile={displayProfile} key={index} />;
            })}
          </FlexContainer>
        </ScrollableContainer>
      </PositionContainer>
    </GrowingContainer>
  );
}

export default MessageList;
