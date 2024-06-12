import React, { useState } from 'react';
import { css } from '@emotion/css';
import Icon from '../Icon';
import attach from '../../images/attach.svg';
import send from '../../images/send.svg';
import { useAppDispatch } from '../../state/hooks';

function SendBar() {
  const dispatch = useAppDispatch();
  const [state, setState] = useState('');

  const sendMessage = () => {
    if (!state.length) {
      alert('A message cannot be empty');
    }
    dispatch({ type: 'conversations/requestAddMessage', payload: state });
    setState('');
  };

  return (
    <div className={css`
      padding: 24px;
      display: flex;
      gap: 24px;
      justify-content: center;
      align-items: center;
      position: relative;
    `}>
      <Icon size={24} src={attach} alt='Attach' />
      <input type='text' placeholder='Type a message' value={state} className={css`
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 10px 54px 10px 20px;
        flex-grow: 1;
      `} onChange={e => setState(e.target.value)} onKeyPress={e => {
        if (e.key === 'Enter') {
          sendMessage();
        }
      }} />
      <div className={css`
        position: absolute;
        right: 44px;
      `}>
        <Icon size={24} src={send} alt='Send' onClick={sendMessage} />
      </div>
    </div>
  );
}

export default SendBar;
