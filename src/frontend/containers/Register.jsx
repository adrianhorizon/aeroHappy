import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../redux/actions/loginAction';
import Country from '../components/Country';
import '../assets/styles/components/Login.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { t } = this.props;

    return (
      <section className="container-form">
        <div className="left" />
        <div className="right">
          <h2>
            <Country />
            {t('LOGIN.REGISTER')}
          </h2>
          <form>

            <div className="inputs">
              <input
                name="firstName"
                type="text"
                placeholder={t('LOGIN.FIRST_NAME')}
              />
              <input
                name="email"
                type="text"
                placeholder={t('LOGIN.EMAIL')}
              />
              <input
                name="phone"
                type="phone"
                placeholder={t('LOGIN.PHONE')}
              />
              <input
                name="password"
                type="password"
                placeholder={t('LOGIN.PASSWORD')}
              />
            </div>

            <div className="container-button">
              <button className="container-login" type="button">{t('LOGIN.REGISTERED')}</button>
            </div>

            <p className="container-social-title">
              <Link to="/login">
                {t('LOGIN.SIGN_IN')}
              </Link>
            </p>
          </form>
        </div>
      </section>
    );
  }
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(
  null,
  mapDispatchToProps,
)(withNamespaces()(Register));
