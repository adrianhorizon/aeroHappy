import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../redux/actions/loginAction';
import Country from '../components/Country';
import LoginForm from '../components/LoginForm';
import ContainerSeo from '../layout/ContainerSeo';
import '../assets/styles/components/Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      form: {
        email: '',
        password: '',
      },
    };
  }

  handleChangeLogin = (e) => {
    this.setState({
      form: {
        // eslint-disable-next-line react/no-access-state-in-setstate
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitLogin = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    try {
      await console.log(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/login');
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { t } = this.props;

    if (this.state.loading === true) {
      return <div>loading ...</div>;
    }

    return (
      <section className="container-form">
        <ContainerSeo
          title={t('LOGIN.TITLE_HELMET_LOGIN')}
          subTitle={t('LOGIN.TITLE_HELMET_LOGIN')}
          link=""
        />
        <div className="left" />
        <div className="right">
          <h2>
            <Country />
            {t('LOGIN.SIGN_IN')}
          </h2>
          <p>
            {t('LOGIN.NEW_ACCOUNT')}
            <Link to="/register" className="separate-register">
              {t('LOGIN.REGISTER')}
            </Link>
          </p>

          <LoginForm
            onChangeLogin={this.handleChangeLogin}
            onSubmitLogin={this.handleSubmitLogin}
            loginValues={this.state.form}
          />
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
