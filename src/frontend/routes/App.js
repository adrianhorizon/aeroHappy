import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../pages/Home';
import Login from '../pages/Login';
import AppRoute from './AppRoute';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <AppRoute path="/" exact component={Home} />
        <AppRoute path="/login" exact component={Login} />
        <AppRoute path="**" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;
