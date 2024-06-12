import React, { MouseEventHandler } from 'react';
import { css } from '@emotion/css';

export type IconProps = {
  size: number,
  src: string,
  alt: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
};

function Icon({ size, src, alt, onClick }: IconProps) {
  return (
    <button className={css`
      width: ${size}px;
      height: ${size}px;
      display: flex;
      justify-content: center;
      align-items: center;
    `} onClick={onClick}>
      <img src={src} alt={alt} />
    </button>
  );
}

export default Icon;
