import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountry } from '../redux/actions';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Layout from '../components/Layout';

class Routes extends Component {
  componentDidMount() {
    this.props.getCountry();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const stateToProps = ({ reducer }) => ({
  pending: reducer.pending,
  country: reducer.country,
  cityId: reducer.cityId,
  countryData: reducer.countryData,
  offers: reducer.offers,
});

export default connect(
  stateToProps,
  { getCountry },
)(Routes);
