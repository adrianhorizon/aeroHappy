import axios from 'axios';
import store from '../store';
import i18n from '../../utils/i18n';
import { GET_COUNTRY, SET_COUNTRY } from '../../utils/types';

const urlCity = 'https://ipapi.co/json/';

export const getCountrySuccess = (data) => {
  const { country } = data;
  const countryData = process.env.NODE_ENV || country.toUpperCase();

  switch (country.toUpperCase()) {
    case 'CO':
      i18n.changeLanguage('es_co');
      break;
    case 'MX':
      i18n.changeLanguage('es_mx');
      break;
    case 'BR':
      i18n.changeLanguage('pt_br');
      break;
    case 'US':
      i18n.changeLanguage('es_en');
      break;
    default:
      i18n.changeLanguage('es_co');
  }

  return {
    type: SET_COUNTRY,
    country,
    countryData,
  };
};

export const getCountry = () => (dispatch) => {
  const { countryReducer } = store.getState();

  if (countryReducer.country.length === 0) {
    dispatch({
      type: GET_COUNTRY,
    });

    axios.get(urlCity)
      .then(({ data }) => dispatch(getCountrySuccess(data)))
      .catch(error => console.log(error));
  }
};
