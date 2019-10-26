import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountry } from '../redux/actions/countryAction';

import Header from '../components/Header';
import Footer from '../components/Footer';

class AppRoute extends Component {
  componentDidMount() {
    this.props.getCountry();
  }

  render() {
    const { component: Component, pending, ...rest } = this.props;
    const validateComponent = !['/login', '/register'].includes(this.props.location.pathname);

    return (
      <Route
        {...rest}
        render={(props) => {
          if (pending) return '';

          return (
            <div>
              {validateComponent && <Header />}
              <Component {...props} />
              {validateComponent && <Footer />}
            </div>
          );
        }}
      />
    );
  }
}

const stateToProps = ({ countryReducer }) => ({
  pending: countryReducer.pending,
  country: countryReducer.country,
  cityId: countryReducer.cityId,
  countryData: countryReducer.countryData,
});

export default connect(
  stateToProps,
  { getCountry },
)(AppRoute);
