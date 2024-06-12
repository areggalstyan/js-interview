import React from 'react';
import { css } from '@emotion/css';
import profile from '../../images/profile.svg';
import OnlineDot from './OnlineDot';

function UserInfo({ name }: { name: string }) {
  return (
    <div className={css`
      display: flex;
      gap: 16px;
    `}>
      <img src={profile} alt='' width={48} height={48} />
      <div className={css`
        display: flex;
        flex-direction: column;
      `}>
        <h3 className={css`
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
        `}>
          {name}
        </h3>
        <div className={css`
          display: flex;
          gap: 8px;
          align-items: center;
        `}>
          <OnlineDot />
          <span className={css`
            font-weight: 600;
            font-size: 12px;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.6);
          `}>
            Online
          </span>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
