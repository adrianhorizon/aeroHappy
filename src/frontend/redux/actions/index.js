import axios from 'axios';
import store from '../store';
import i18n from '../../utils/i18n';
import TYPES from '../../utils/types';

const urlCity = 'https://ipapi.co/json/';

export const setItemsLoading = () => {
  return {
    type: TYPES.ITEMS_LOADING,
  };
};

export const returnErrors = (msg, status, id = null) => {
  return {
    type: TYPES.GET_ERRORS,
    payload: { msg, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: TYPES.CLEAR_ERRORS,
  };
};

export const getCountrySuccess = ({ country }) => {
  const countryData = process.env.COUNTRY_ENV || country.toUpperCase();

  switch (countryData) {
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
    type: TYPES.SET_COUNTRY,
    country,
    countryData,
  };
};

export const loginRequest = payload => ({
  type: TYPES.LOGIN_REQUEST,
  payload,
});

export const logoutRequest = payload => ({
  type: TYPES.LOGOUT_REQUEST,
  payload,
});

export const setError = payload => ({
  type: TYPES.SET_ERROR,
  payload,
});

export const registerRequest = payload => ({
  type: TYPES.REGISTER_REQUEST,
  payload,
});

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get('/api/offers')
    .then(res => dispatch({
      type: TYPES.GET_ITEMS,
      payload: res.data.data,
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const getCountry = () => (dispatch) => {
  const { reducer } = store.getState();
  if (reducer.country.length === 0) {
    dispatch({
      type: TYPES.GET_COUNTRY,
    });

    axios.get(urlCity)
      .then(({ data }) => dispatch(getCountrySuccess(data)))
      .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
  }
};
