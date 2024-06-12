import React from 'react';
import { css } from '@emotion/css';
import { useAppDispatch } from '../../state/hooks';

function SearchBar() {
  const dispatch = useAppDispatch();

  return (
    <div className={css`
      height: 72px;
      padding: 12px 24px;
    `}>
      <input type='text' placeholder='Search messages' className={css`
        height: 100%;
        width: 100%;
        padding: 10px 20px;
        background-color: #f3f3f3;
        border: none;
        border-radius: 12px;
      `} onChange={e => dispatch({ type: 'search/setText', payload: e.target.value })} />
    </div>
  );
}

export default SearchBar;
