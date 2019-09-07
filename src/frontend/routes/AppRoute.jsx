import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountry } from '../redux/actions/countryAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AppRoute extends Component {
  componentWillMount() {
    this.props.getCountry();
  }

  render() {
    const { component: Component, pending, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (pending) return '';

          return (
            <div>
              {props.location.pathname !== '/login' &&
                <Header />
              }
              <Component {...props} />
              {props.location.pathname !== '/login' &&
                <Footer />
              }
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