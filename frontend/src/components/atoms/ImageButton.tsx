import { MouseEventHandler } from 'react';
import { css } from '@emotion/css';
import Image, { ImageProps } from './Image';

export type ButtonProps = {
  width?: string;
  height?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ImageProps;

function ImageButton({ width = 'auto', height = 'auto', src, alt = '', onClick }: ButtonProps) {
  return (
    <button
      className={css`
        background: none;
        border: none;

        :hover {
          cursor: pointer;
        }
      `}
      onClick={onClick}
    >
      <Image width={width} height={height} src={src} alt={alt} />
    </button>
  );
}

export default ImageButton;
