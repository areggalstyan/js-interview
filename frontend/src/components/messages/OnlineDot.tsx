import React from 'react';
import { css } from '@emotion/css';

function OnlineDot() {
  return (
    <span className={css`
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #68d391;
    `} />
  );
}

export default OnlineDot;
