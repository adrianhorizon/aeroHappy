import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { loginRequest } from '../redux/actions';
import Country from '../components/Country';
import RegisterForm from '../components/RegisterForm';
import ContainerSeo from '../layout/ContainerSeo';
import '../assets/styles/components/Login.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      form: {
        firstName: '',
        email: '',
        phone: '',
        password: '',
      },
    };
  }

  handleChangeRegister = (e) => {
    this.setState({
      form: {
        // eslint-disable-next-line react/no-access-state-in-setstate
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmitRegister = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    try {
      await console.log(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/register');
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
          title={t('LOGIN.TITLE_HELMET_REGISTER')}
          subTitle={t('LOGIN.TITLE_HELMET_REGISTER')}
          link=""
        />
        <div className="left" />
        <div className="right">
          <h2>
            <Country />
            {t('LOGIN.REGISTER')}
          </h2>
          <RegisterForm
            onChangeRegister={this.handleChangeRegister}
            onSubmitRegister={this.handleSubmitRegister}
            registerValues={this.state.form}
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
)(withNamespaces()(Register));
