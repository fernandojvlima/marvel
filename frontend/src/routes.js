import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Details from '../src/pages/Details';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  )
}

export default Routes;