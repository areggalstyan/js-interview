import React from 'react';
import { css } from '@emotion/css';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className={css`
      padding: 2px 8px;
      background-color: #edf2f7;
      border-radius: 24px;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      margin-left: 10px;
    `}>
      {children}
    </span>
  );
}

export default Badge;
