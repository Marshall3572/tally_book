import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  //border: 1px solid red;
  //height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  //border: 1px solid green;
  //这样就可以把导航栏压到屏幕底部
  flex-grow: 1;
  // 如果Main中的内容超了，那么滚动条只显示在Main，不影响底部导航。或者不要这句，直接把Wrapper的
  //overflow: auto;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>

  );
};

export default Layout