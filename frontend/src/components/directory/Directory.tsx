import React from 'react';
import { css } from '@emotion/css';
import Category from './Category';
import profile from '../../images/profile.svg';
import file from '../../images/file.svg';

function Directory() {
  return (
    <div className={css`
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    `}>
      <div className={css`
        width: 362px;
        height: 80px;
        padding: 24px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      `}>
        <h3 className={css`
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
        `}>
          Directory
        </h3>
      </div>
      <div className={css`
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      `}>
        <Category name='Team Members' count={4} items={[
          { name: 'John Doe', description: 'Profession', image: profile },
          { name: 'John Doe', description: 'Profession', image: profile },
          { name: 'John Doe', description: 'Profession', image: profile },
          { name: 'John Doe', description: 'Profession', image: profile }
        ]} />
      </div>
      <Category name='Files' count={3} items={[
        { name: 'example.pdf', description: 'PDF 10mb', image: file },
        { name: 'example.pdf', description: 'PDF 10mb', image: file },
        { name: 'example.pdf', description: 'PDF 10mb', image: file }
      ]} />
    </div>
  );
}

export default Directory;
