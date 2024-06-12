import React from 'react';
import { css } from '@emotion/css';

function Logo() {
  return (
    <div className={css`
        background-color: #615ef0;
        width: 56px;
        height: 56px;
        border-radius: 14px;
        font-family: 'Asap', sans-serif;
        font-weight: 700;
        font-size: 21px;
        line-height: 31.5px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `}>
      Q
    </div>
  );
}

export default Logo;
