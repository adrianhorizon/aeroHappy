import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import AppRoute from './AppRoute';

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <AppRoute exact path="/" component={Home} />
        <AppRoute exact path="/login" component={Login} />
        <AppRoute exact path="/register" component={Register} />
        <AppRoute path="**" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routes;
