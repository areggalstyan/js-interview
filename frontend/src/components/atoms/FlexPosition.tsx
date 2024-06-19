import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type FlexPositionProps = {
  at: 'left' | 'right' | 'top' | 'bottom';
  children: ReactNode;
};

function FlexPosition({ at, children }: FlexPositionProps) {
  return (
    <div
      className={css`
          margin-${{ left: 'right', right: 'left', top: 'bottom', bottom: 'top' }[at]}: auto;
      `}
    >
      {children}
    </div>
  );
}

export default FlexPosition;
