import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/tags" component={Tags}/>
        <Route path="/money" component={Money}/>
        <Route path="/statistics" component={Statistics}/>
        {/*修改默认路由*/}
        <Redirect exact from="/" to="/money"/>
        <Route path="*" component={NoMatch}/>
      </Switch>
    </Router>
  );
};


export default App;
