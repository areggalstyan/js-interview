import { MouseEventHandler } from 'react';
import { css } from '@emotion/css';
import { ImageProps } from './Image';

export type ButtonProps = {
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ImageProps;

function ImageButton({ width = 'auto', height = 'auto', src, alt = '', onClick }: ButtonProps) {
  return (
    <button
      className={css`
        width: ${width};
        height: ${height};
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: none;

        :hover {
          cursor: pointer;
        }
      `}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </button>
  );
}

export default ImageButton;
