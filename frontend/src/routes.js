import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import NotFound from './pages/NotFound';
import About from './pages/About';
import Details from './pages/Details';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" component={Details} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes;