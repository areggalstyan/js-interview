import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type BreakpointContainerProps = {
  type: 'min' | 'max';
  width: string;
  children: ReactNode;
};

function BreakpointContainer({ type, width, children }: BreakpointContainerProps) {
  return (
    <div
      className={css`
        @media (${type}-width: ${width}) {
          display: none;
        }
      `}
    >
      {children}
    </div>
  );
}

export default BreakpointContainer;
