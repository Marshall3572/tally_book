import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags" component={Tags}/>
          <Route exact path="/tags/:id" component={Tag}/>
          <Route exact path="/money" component={Money}/>
          <Route exact path="/statistics" component={Statistics}/>
          {/*修改默认路由*/}
          <Redirect exact from="/" to="/money"/>
          <Route path="*" component={NoMatch}/>
        </Switch>
      </Router>
    </AppWrapper>
  );
};


export default App;
