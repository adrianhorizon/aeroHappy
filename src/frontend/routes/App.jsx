import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import AppRoute from './AppRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AppRoute exact path="/" component={Home} />
      <AppRoute exact path="/login" component={Login} />
      <AppRoute exact path="/register" component={Register} />
      <AppRoute component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
