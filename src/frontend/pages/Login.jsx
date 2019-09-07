import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../redux/actions/loginAction';
import '../assets/styles/components/Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { t } = this.props;

    return (
      <section className="container-form">
        <div className="left">
          <div className="overlay">
            <h1>{t('AERO_HAPPY')}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur et est sed felis aliquet sollicitudin
            </p>
          </div>
        </div>
        <div className="right">
          <h2>{t('LOGIN.SIGN_IN')}</h2>
          <p>
            {t('LOGIN.NEW_ACCOUNT')}
            <Link to="/register">
              {t('LOGIN.REGISTER')}
            </Link>
          </p>
          <form>
            <div className="inputs">
              <input
                name="email"
                type="text"
                placeholder={t('LOGIN.EMAIL')}
              />
              <input
                name="password"
                type="password"
                placeholder={t('LOGIN.PASSWORD')}
              />
            </div>
            <div className="remember-forget-password">
              <label>
                <input type="checkbox" value="first_checkbox" />
                {t('LOGIN.ALLOW')}
              </label>
              <a href="/">{t('LOGIN.FORGOT_PASSWORD')}</a>
            </div>

            <div className="container-button">
              <button className="container-login" type="button">{t('LOGIN.SIGN_IN')}</button>
            </div>

            <div className="container-button-social">
              <button className="button-social" type="button">
                <i className="fab fa-google fa-lg" aria-hidden="true" />
                {t('LOGIN.SIGN_IN_SOCIAL')} Google
              </button>

              <button className="button-social" type="button">
                <i className="fab fa-twitter-square fa-lg" aria-hidden="true" />
                {t('LOGIN.SIGN_IN_SOCIAL')} Twitter
              </button>
            </div>
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
)(withNamespaces()(Login));
