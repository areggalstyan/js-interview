import { css } from '@emotion/css';
import React from 'react';
import call from '../../images/call.svg';

function CallButton() {
  return (
    <button className={css`
      width: 94px;
      height: 44px;
      border-radius: 8px;
      padding: 10px 16px;
      background-color: rgba(97, 94, 240, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #615ef0;
      margin-left: auto;
    `}>
        <span className={css`
          width: 24px;
          height: 24px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        `}>
          <img src={call} alt='' />
        </span>
      Call
    </button>
  );
}

export default CallButton;
