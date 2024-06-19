import { css } from '@emotion/css';

export type ImageProps = {
  width?: string;
  height?: string;
  margin?: string;
  src: string;
  alt?: string;
};

function Image({ width = 'auto', height = 'auto', margin = '0', src, alt = '' }: ImageProps) {
  return (
    <span
      className={css`
        width: ${width};
        height: ${height};
        margin: ${margin};
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <img
        src={src}
        alt={alt}
        className={css`
          max-width: 100%;
          max-height: 100%;
        `}
      />
    </span>
  );
}

export default Image;
