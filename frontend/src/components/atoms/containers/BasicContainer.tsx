import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type BasicContainerProps = {
  width?: string;
  height?: string;
  padding?: string;
  children?: ReactNode;
};

function BasicContainer({
  width = 'auto',
  height = 'auto',
  padding = '0',
  children
}: BasicContainerProps) {
  return (
    <div
      className={css`
        width: ${width};
        height: ${height};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
}

export default BasicContainer;
