import React from 'react';
import { css } from '@emotion/css';
import Icon from '../Icon';
import edit from '../../images/edit.svg';
import remove from '../../images/remove.svg';
import { useAppDispatch } from '../../state/hooks';
import { Message } from '../../conversation';

function MessageActions({ message }: { message: Message }) {
  const dispatch = useAppDispatch();

  return (
    <span className={css`
      display: inline-flex;
      float: right;
      gap: 8px;
      margin-top: 8px;
    `}>
      <Icon size={12} src={edit} alt='Edit' onClick={() =>
        dispatch({
          type: 'conversations/requestEditMessage',
          payload: { id: message.id, name: message.name, text: prompt('Type a message') }
        })} />
      <Icon size={12} src={remove} alt='Remove' onClick={() =>
        dispatch({
          type: 'conversations/requestRemoveMessage',
          payload: message.id
        })} />
    </span>
  );
}

export default MessageActions;
