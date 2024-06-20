import FlexContainer from '../../atoms/containers/FlexContainer';
import MessageBody from './MessageBody';
import FlexPosition from '../../atoms/FlexPosition';
import { getCurrentName } from '../../../user';
import Image from '../../atoms/Image';
import BasicContainer from '../../atoms/containers/BasicContainer';
import NoShrinkContainer from '../../atoms/containers/NoShrinkContainer';
import { Message } from '../../../api/models';
import { profile } from '../../../images/images';

export type MessageViewProps = { displayProfile: boolean } & Message;

function MessageView({ name, text, id, dateAdded, dateEdited, displayProfile }: MessageViewProps) {
  const isMine = name === getCurrentName();

  return (
    <FlexPosition at={isMine ? 'right' : 'left'}>
      <FlexContainer gap="16px" direction={isMine ? 'row' : 'row-reverse'}>
        <MessageBody
          name={name}
          text={text}
          id={id}
          dateAdded={dateAdded}
          dateEdited={dateEdited}
        />
        <NoShrinkContainer>
          {displayProfile ? (
            <Image width="40px" height="40px" src={profile} />
          ) : (
            <BasicContainer width="40px" height="40px" />
          )}
        </NoShrinkContainer>
      </FlexContainer>
    </FlexPosition>
  );
}

export default MessageView;
