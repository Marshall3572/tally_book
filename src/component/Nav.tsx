import {Link} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
require('../icons/money.svg');  // svgo-loader => svg-sprite-loader这个loader会把我们引入的svg标签在body里作为一个symbol，合并成一个大的svg
require('../icons/tag.svg');
require('../icons/chart.svg');

const Nav = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    li {
      width: 33.333333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      //justify-content: center;
      align-items: center;
      padding: 4px 0;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export default () => {
  return (
    <Nav>
      <ul>
        <li>
          <svg className="icon">
            {/* 可以在控制台打出，看得到id*/}
            <use xlinkHref="#tag"/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"/>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </Nav>
  );
}
