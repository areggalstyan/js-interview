import { MouseEventHandler, ReactNode } from 'react';
import { css } from '@emotion/css';

export type ClickableContainerProps = {
  width?: string;
  height?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  children?: ReactNode;
};

function ClickableContainer({
  width = 'auto',
  height = 'auto',
  onClick,
  children
}: ClickableContainerProps) {
  return (
    <div
      className={css`
        width: ${width};
        height: ${height};
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ClickableContainer;
