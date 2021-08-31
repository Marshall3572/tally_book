import styled from 'styled-components';
import React, {FC, useState} from 'react';
import {Category} from '../Money';

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;

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
type Props = {
  value: Category,
  onChange: (value: Category) => void
}
const CategorySection: FC<Props> = (props) => {
  const category = props.value;
  const categoryMap = {
    '-': '支出',
    '+': '收入'
  };
  type Keys = keyof typeof categoryMap

  const [categoryList] = useState<Keys[]>(['-', '+']);
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c => {
          return (
            <li key={c} className={category === c ? 'selected' : ''} onClick={()=>{props.onChange(c)}}>{categoryMap[c]}</li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};