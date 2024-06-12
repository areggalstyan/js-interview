import React from 'react';
import CategoryItem, { CategoryItemProps } from './CategoryItem';
import { css } from '@emotion/css';
import Badge from '../Badge';

function Category({ name, count, items }: { name: string, count: number, items: CategoryItemProps[] }) {
  return (
    <div className={css`
      padding: 16px;
      margin: 8px 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    `}>
      <h3 className={css`
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
      `}>
        {name}
        <Badge>{count}</Badge>
      </h3>
      {items.map((item, index) => <CategoryItem {...item} key={index} />)}
    </div>
  );
}

export default Category;
