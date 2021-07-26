import React from 'react';
import {HashRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';

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
const Nav = styled.nav`
  border: 1px solid blue;

  > ul {
    display: flex;
    li {
      width: 33.333333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Tags = () => {
  return (
    <h2>Tags</h2>
  );
};
const Money = () => {
  return (
    <h2>Money</h2>
  );
};
const Statistics = () => {
  return (
    <h2>Statistics</h2>
  );
};
const NoMatch = () => {
  return (
    <div>页面不存在，请检查输入地址</div>
  );
};

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags" component={Tags}/>
            <Route path="/money" component={Money}/>
            <Route path="/statistics" component={Statistics}/>
            {/*修改默认路由*/}
            <Redirect exact from="/" to="/money"/>
            <Route path="*" component={NoMatch}/>
          </Switch>
        </Main>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
      </Wrapper>
    </Router>
  );
};


export default App;
