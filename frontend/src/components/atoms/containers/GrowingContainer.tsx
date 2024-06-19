import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type GrowingContainerProps = {
  width?: string;
  height?: string;
  children: ReactNode;
};

function GrowingContainer({ width = 'auto', height = 'auto', children }: GrowingContainerProps) {
  return (
    <div
      className={css`
        width: ${width};
        height: ${height};
        position: relative;
        flex-grow: 1;
      `}
    >
      {children}
    </div>
  );
}

export default GrowingContainer;
