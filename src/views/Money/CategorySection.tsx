import styled from 'styled-components';
import React, {FC, useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      //为了让下划线border不占高度，使用伪元素
      &.selected::after {
        content: '';
        background: #333;
        // 默认另起一行
        display: block;
        height: 3px;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
      }
    }
  }
`;
const CategorySection: FC = () => {
  const categoryMap = {
    '-': '支出',
    '+': '收入'
  }
  type Keys = keyof typeof categoryMap

  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [category, setCategory] = useState('-'); // '-'表示支出，'+'表示收入
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => {
          return (
            <li key={c} className={category === c ? 'selected' : ''} onClick={() => {setCategory(c);}}>{categoryMap[c]}</li>
          )
        })}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};