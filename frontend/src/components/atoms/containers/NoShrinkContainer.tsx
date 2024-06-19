import { ReactNode } from 'react';
import { css } from '@emotion/css';

function NoShrinkContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        flex-shrink: 0;
      `}
    >
      {children}
    </div>
  );
}

export default NoShrinkContainer;
