import React from 'react';
import { css } from '@emotion/css';

function Icon({ size, src, alt }: { size: number, src: string, alt: string }) {
  return (
    <button className={css`
      width: ${size}px;
      height: ${size}px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <img src={src} alt={alt} />
    </button>
  );
}

export default Icon;
