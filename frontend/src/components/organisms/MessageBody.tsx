import { css } from '@emotion/css';
import { getCurrentName } from '../../user';
import FlexPosition from '../atoms/FlexPosition';
import MessageActions from '../molecules/MessageActions';
import FlexContainer from '../atoms/containers/FlexContainer';
import MessageDates from '../molecules/MessageDates';
import { Message } from '../../api/models';

function MessageBody({ name, text, id, dateAdded, dateEdited }: Message) {
  const isMine = name === getCurrentName();

  return (
    <div
      className={css`
        border-radius: 12px;
        padding: 8px 16px;
        background-color: ${isMine ? '#615ef0' : '#f1f1f1'};
        color: ${isMine ? 'white' : 'black'};
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        word-wrap: anywhere;
      `}
    >
      {text}
      <FlexPosition at="right">
        <FlexContainer direction="column" gap="4px" padding="8px 0 0 0">
          <MessageDates dateAdded={dateAdded} dateEdited={dateEdited} isMine={isMine} />
          {isMine && (
            <FlexPosition at="right">
              <MessageActions id={id} name={name} />
            </FlexPosition>
          )}
        </FlexContainer>
      </FlexPosition>
    </div>
  );
}

export default MessageBody;
