import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Details from '../src/pages/Details';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;