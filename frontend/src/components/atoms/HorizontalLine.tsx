import { css } from '@emotion/css';

function HorizontalLine() {
  return (
    <hr
      className={css`
        height: 1px;
        border: none;
        background-color: rgba(0, 0, 0, 0.08);
      `}
    />
  );
}

export default HorizontalLine;
