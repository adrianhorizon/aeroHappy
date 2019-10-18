import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../redux/actions/loginAction';
import Country from '../components/Country';
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
        <div className="left" />
        <div className="right">
          <h2>
            <Country />
            {t('LOGIN.SIGN_IN')}
          </h2>
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

            <div className="container-forgot">
              <Link to="/">{t('LOGIN.FORGOT_PASSWORD')}</Link>
            </div>

            <div className="container-button">
              <button className="container-login" type="button">{t('LOGIN.SIGN_IN')}</button>
            </div>

            <div className="container-button-social">
              <p className="container-social-title">or</p>
              <hr />
              <button type="button" className="button-social instagram">
                <i className="fab fa-google fa-lg" aria-hidden="true" />
                {t('LOGIN.SIGN_IN_SOCIAL')} Google
              </button>
              <button type="button" className="button-social twitter">
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
