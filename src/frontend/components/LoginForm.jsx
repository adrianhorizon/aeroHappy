import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const handlePageChange = () => {
  window.location.href = 'auth/facebook';
};

const handlePageChangeTwitter = () => {
  window.location.href = 'auth/twitter';
};

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitLogin}>

        <div className="inputs">
          <div className="login-form">
            <label>{props.t('LOGIN.EMAIL')}</label>
            <input
              placeholder={props.t('LOGIN.EMAIL')}
              onChange={props.onChangeLogin}
              type="email"
              name="email"
              value={props.loginValues.email}
            />
          </div>

          <div className="login-form">
            <label>{props.t('LOGIN.PASSWORD')}</label>
            <input
              placeholder={props.t('LOGIN.PASSWORD')}
              onChange={props.onChangeLogin}
              type="password"
              name="password"
              value={props.loginValues.password}
            />
          </div>
        </div>

        <div className="container-forgot">
          <Link to="/">{props.t('LOGIN.FORGOT_PASSWORD')}</Link>
        </div>

        <div className="container-button">
          <button className="container-login" type="submit">{props.t('LOGIN.SIGN_IN')}</button>
        </div>

        <div className="container-button-social">
          <p className="container-social-title">or</p>
          <hr />
          <button type="button" onClick={handlePageChange} className="button-social facebook">
            <i className="fab fa-facebook-square fa-lg" aria-hidden="true" />
            {props.t('LOGIN.SIGN_IN_SOCIAL')} Facebook
          </button>
          <button type="button" onClick={handlePageChangeTwitter} className="button-social twitter">
            <i className="fab fa-twitter-square fa-lg" aria-hidden="true" />
            {props.t('LOGIN.SIGN_IN_SOCIAL')} Twitter
          </button>
        </div>
      </form>
    </div>
  );
};

export default (withNamespaces()(LoginForm));
