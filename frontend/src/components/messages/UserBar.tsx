import React from 'react';
import { css } from '@emotion/css';
import { useAppSelector } from '../../state/hooks';
import CallButton from './CallButton';
import UserInfo from './UserInfo';

function UserBar() {
  const name: string = useAppSelector(state => state.currentConversation)!;

  return (
    <div className={css`
      height: 80px;
      padding: 0 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
    `}>
      <UserInfo name={name} />
      <CallButton />
    </div>
  );
}

export default UserBar;
