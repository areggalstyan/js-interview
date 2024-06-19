import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type ScrollableContainerProps = {
  startAtBottom?: boolean;
  children: ReactNode;
};

function ScrollableContainer({ startAtBottom = false, children }: ScrollableContainerProps) {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        flex-grow: 1;
        ${startAtBottom &&
        css`
          display: flex;
          flex-direction: column-reverse;
        `}
        overflow-y: auto;
      `}
    >
      {children}
    </div>
  );
}

export default ScrollableContainer;
