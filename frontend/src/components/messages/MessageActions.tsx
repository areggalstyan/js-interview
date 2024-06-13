import React from 'react';
import { css } from '@emotion/css';
import Icon from '../Icon';
import edit from '../../images/edit.svg';
import remove from '../../images/remove.svg';
import { useAppDispatch } from '../../state/hooks';
import { Message } from '../../conversation';
import { useTranslation } from 'react-i18next';

function MessageActions({ message }: { message: Message }) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const editMessage = () => {
    const newText = prompt(t('typeAMessage'));
    if (!newText || !newText.length) {
      alert(t('aMessageCannotBeEmpty'));
      return;
    }
    dispatch({
      type: 'conversations/requestEditMessage',
      payload: { id: message.id, name: message.name, text: newText }
    });
  };

  return (
    <span className={css`
      display: inline-flex;
      float: right;
      gap: 8px;
      margin-top: 8px;
    `}>
      <Icon size={12} src={edit} alt={t('edit')} onClick={editMessage} />
      <Icon size={12} src={remove} alt={t('remove')} onClick={() =>
        dispatch({
          type: 'conversations/requestRemoveMessage',
          payload: message.id
        })} />
    </span>
  );
}

export default MessageActions;
