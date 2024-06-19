import { ReactNode } from 'react';
import { css } from '@emotion/css';

function Badge({ margin = '0', children }: { margin?: string; children: ReactNode }) {
  return (
    <span
      className={css`
        margin: ${margin};
        padding: 2px 8px;
        background-color: #edf2f7;
        border-radius: 24px;
        font-weight: 600;
        font-size: 12px;
        line-height: 1.5;
      `}
    >
      {children}
    </span>
  );
}

export default Badge;
