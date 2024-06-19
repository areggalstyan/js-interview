import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { css } from '@emotion/css';

export type TextInputProps = {
  value?: string;
  width?: string;
  height?: string;
  padding?: string;
  placeholder: string;
  border?: string;
  backgroundColor?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
};

function TextInput({
  value = '',
  width = 'auto',
  height = 'auto',
  padding = 'auto',
  placeholder,
  border = 'none',
  backgroundColor = 'transparent',
  onChange,
  onKeyDown
}: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={css`
        width: ${width};
        height: ${height};
        padding: ${padding};
        border: ${border};
        background-color: ${backgroundColor};
        border-radius: 12px;
      `}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextInput;
