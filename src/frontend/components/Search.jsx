import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import SearchForm from './SearchForm';
import '../assets/styles/components/Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectedOption: '1',
      form: {
        origin: '',
        destination: '',
        date: '',
        dateLast: '',
        people: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        // eslint-disable-next-line react/no-access-state-in-setstate
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
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

  radioChange = (e) => {
    this.setState({
      selectedOption: e.currentTarget.value,
    });
  }

  render() {
    const { t } = this.props;

    if (this.state.loading === true) {
      return <div>loading ...</div>;
    }

    let formTravel = '';

    switch (this.state.selectedOption) {
      case '1':
        formTravel = (
          <SearchForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
            disabledButton={this.state.selectedOption}
          />
        );
        break;
      case '2':
        formTravel = (
          <SearchForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
            disabledButton={this.state.selectedOption}
          />
        );
        break;
      case '3':
        formTravel = (
          <div>hola</div>
        );
        break;
    }

    return (
      <div className="container-search">
        <div className="search-country">
          <h3>{t('SEARCH.TRAVEL_TILE')}</h3>
          <div className="container-radio-button">
            <div className="radio">
              <input
                type="radio"
                name="1"
                id="1"
                value="1"
                checked={this.state.selectedOption === '1'}
                onChange={this.radioChange}
              />
              <label htmlFor="1">{t('SEARCH.ROUND_TRIP')}</label>

              <input
                type="radio"
                name="2"
                id="2"
                value="2"
                checked={this.state.selectedOption === '2'}
                onChange={this.radioChange}
              />
              <label htmlFor="2">{t('SEARCH.ONE_WAY')}</label>

              <input
                type="radio"
                name="3"
                id="3"
                value="3"
                checked={this.state.selectedOption === '3'}
                onChange={this.radioChange}
              />
              <label htmlFor="3">{t('SEARCH.MULTI_DESTINATION')}</label>
            </div>
          </div>
          {formTravel}
        </div>
      </div>
    );
  }
}

export default (withNamespaces()(Search));
