import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type FlexPosition =
  | 'start'
  | 'center'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexContainerProps = {
  width?: string;
  height?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  boxShadow?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: string;
  padding?: string;
  justify?: FlexPosition;
  align?: FlexPosition;
  grow?: number;
  children: ReactNode;
};

function FlexContainer({
  width = 'auto',
  height = 'auto',
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  boxShadow = 'none',
  direction = 'row',
  gap = '0',
  padding = '0',
  justify = 'flex-start',
  align = 'flex-start',
  grow = 0,
  children
}: FlexContainerProps) {
  return (
    <div
      className={css`
        width: ${width};
        height: ${height};
        border: ${border};
        border-top: ${borderTop};
        border-right: ${borderRight};
        border-bottom: ${borderBottom};
        border-left: ${borderLeft};
        box-shadow: ${boxShadow};
        display: flex;
        flex-direction: ${direction};
        gap: ${gap};
        padding: ${padding};
        justify-content: ${justify};
        align-items: ${align};
        flex-grow: ${grow};
      `}
    >
      {children}
    </div>
  );
}

export default FlexContainer;
