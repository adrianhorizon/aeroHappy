import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Country from './Country';
import '../assets/styles/components/Header.scss';

const Header = ({ t }) => (
  <header className="header">
    <Link to="/" className="logo">
      <Country />
      {t('AERO_HAPPY')}
    </Link>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon" />
    </label>
    <ul className="menu">
      <li><Link to="/" className="inactive">{t('LOGIN.FOR_SALES')} <strong>01 800 518 9325</strong></Link></li>
      <li><Link to="/login" className="inactive">{t('LOGIN.SIGN_IN')}</Link></li>
      <li><Link to="/" className="inactive">{t('LOGIN.TRAVEL')}</Link></li>
    </ul>
  </header>
);

export default (withNamespaces()(Header));
