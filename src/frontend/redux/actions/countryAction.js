/* eslint-disable consistent-return */
import axios from 'axios';
import { GET_COUNTRY, SET_COUNTRY } from '../../utils/types';

import store from '../store';
import i18n from '../../i18n';

const urlCity = 'https://ipapi.co/json/';

export const getCountry = () => (dispatch) => {
  const { countryReducer } = store.getState();

  if (countryReducer.country.length === 0) {
    dispatch({
      type: GET_COUNTRY,
    });

    const request = axios.get(urlCity);

    // eslint-disable-next-line no-use-before-define
    return request.then(res => dispatch(getCountrySuccess(res.data)));
  }
};

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
    case 'EN':
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
