import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import '../assets/styles/components/Header.scss';

class Header extends Component {

  render() {
    const { t, country } = this.props;

    return (
      <header className="header">
        <Link to="/" className="logo inactive" activeClassName="active">
          {t('AERO_HAPPY')}
          {country}
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li><Link to="/" className="inactive" activeClassName="active">{t('LOGIN.FOR_SALES')} <strong>01 800 518 9325</strong></Link></li>
          <li><Link to="/login" className="inactive" activeClassName="active">{t('LOGIN.SIGN_IN')}</Link></li>
          <li><Link to="/" className="inactive" activeClassName="active">{t('LOGIN.TRAVEL')}</Link></li>
        </ul>
      </header>
    );
  }
}

const stateToProps = ({ countryReducer }) => ({
  country: countryReducer.country,
  countryData: countryReducer.countryData,
});

export default connect(stateToProps, {})(withNamespaces()(Header));
