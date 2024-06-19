import { css } from '@emotion/css';

function Logo() {
  return (
    <div
      className={css`
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        background-color: #615ef0;
        border-radius: 14px;
        color: white;
        font-family: 'Asap', sans-serif;
        font-weight: 700;
        font-size: 21px;
        line-height: 1.5;
      `}
    >
      Q
    </div>
  );
}

export default Logo;
