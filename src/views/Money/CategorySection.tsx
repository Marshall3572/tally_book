import styled from 'styled-components';

const CategorySection = styled.section`
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

export {CategorySection}