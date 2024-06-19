import { ReactNode } from 'react';
import { css } from '@emotion/css';

export type TextProps = {
  size: number;
  align?: 'left' | 'center' | 'right';
  color?: string;
  opacity?: number;
  children: ReactNode;
};

function Text({ size, align = 'left', color = '0, 0, 0', opacity = 1, children }: TextProps) {
  return (
    <span
      className={css`
        text-align: ${align};
        color: rgb(${color}, ${opacity});
        font-weight: 600;
        font-size: ${size}px;
        line-height: 1.5;
      `}
    >
      {children}
    </span>
  );
}

export default Text;
