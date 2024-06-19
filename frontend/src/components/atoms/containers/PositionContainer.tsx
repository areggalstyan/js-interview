import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type PositionContainerProps = {
  type: 'relative' | 'absolute' | 'sticky' | 'fixed';
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children: ReactNode;
};

function PositionContainer({
  type,
  width = 'auto',
  height = 'auto',
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
  children
}: PositionContainerProps) {
  return (
    <div
      className={css`
        position: ${type};
        width: ${width};
        height: ${height};
        top: ${top};
        right: ${right};
        bottom: ${bottom};
        left: ${left};
      `}
    >
      {children}
    </div>
  );
}

export default PositionContainer;
