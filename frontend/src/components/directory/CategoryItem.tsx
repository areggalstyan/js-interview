import React from 'react';
import { css } from '@emotion/css';

export type CategoryItemProps = {
  name: string,
  description: string,
  image: string
}

function CategoryItem({ name, description, image }: CategoryItemProps) {
  return (
    <div className={css`
      height: 93px;
      padding: 12px;
      display: flex;
      gap: 16px;
    `}>
      <img src={image} alt='' width={48} height={48} />
      <div className={css`
        flex-grow: 1;
      `}>
        <h3 className={css`
          font-weight: 600;
          font-size: 14px;
          line-height: 21px;
        `}>{name}</h3>
        <p className={css`
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.4);
        `}>{description}</p>
      </div>
    </div>
  );
}

export default CategoryItem;
