import React from 'react';
import UserBar from './UserBar';
import SendBar from './SendBar';
import { css } from '@emotion/css';
import { Conversation, getCurrentName } from '../../conversation';
import { useAppSelector } from '../../state/hooks';
import ConversationMessage from './ConversationMessage';

function SelectedConversation() {
  const { messages }: Conversation = useAppSelector(state =>
    state.conversations.find(conversation => conversation.name === state.currentConversation)!);

  let isPreviousMine: boolean | undefined;

  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    `}>
      <UserBar />
      <div className={css`
        flex-grow: 1;
        position: relative;
      `}>
        <div className={css`
          position: absolute;
          inset: 0;
        `}>
          <div className={css`
            overflow-y: auto;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          `}>
            <div className={css`
              padding: 24px;
              flex-direction: column;
              display: flex;
              gap: 10px;
            `}>
              {messages.map((message, index) => {
                let displayProfile = false;
                const isCurrentMine = message.name === getCurrentName();
                if (isPreviousMine === undefined) {
                  isPreviousMine = isCurrentMine;
                  displayProfile = true;
                } else if (isPreviousMine !== isCurrentMine) {
                  isPreviousMine = isCurrentMine;
                  displayProfile = true;
                }
                return <ConversationMessage
                  message={message}
                  displayProfile={displayProfile}
                  isMine={isPreviousMine}
                  key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <SendBar />
    </div>
  );
}

export default SelectedConversation;
