import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const RegisterForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmitRegister}>

        <div className="inputs">
          <div className="login-form">
            <label>{props.t('LOGIN.FIRST_NAME')}</label>
            <input
              placeholder={props.t('LOGIN.FIRST_NAME')}
              onChange={props.onChangeRegister}
              name="firstName"
              type="text"
              value={props.registerValues.firstName}
            />
          </div>

          <div className="login-form">
            <label>{props.t('LOGIN.EMAIL')}</label>
            <input
              placeholder={props.t('LOGIN.EMAIL')}
              onChange={props.onChangeRegister}
              name="email"
              type="email"
              value={props.registerValues.email}
            />
          </div>

          <div className="login-form">
            <label>{props.t('LOGIN.PHONE')}</label>
            <input
              placeholder={props.t('LOGIN.PHONE')}
              onChange={props.onChangeRegister}
              name="phone"
              type="phone"
              value={props.registerValues.phone}
            />
          </div>

          <div className="login-form">
            <label>{props.t('LOGIN.PASSWORD')}</label>
            <input
              placeholder={props.t('LOGIN.PASSWORD')}
              onChange={props.onChangeRegister}
              name="password"
              type="password"
              value={props.registerValues.password}
            />
          </div>
        </div>

        <div className="container-button">
          <button className="container-login" type="submit">{props.t('LOGIN.REGISTERED')}</button>
        </div>

        <p className="container-social-title">
          <Link to="/login">
            {props.t('LOGIN.SIGN_IN')}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default (withNamespaces()(RegisterForm));
