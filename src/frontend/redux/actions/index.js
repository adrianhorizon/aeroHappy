import axios from 'axios';
import store from '../store';
import i18n from '../../utils/i18n';
import TYPES from '../../utils/Types';

const urlCity = 'https://ipapi.co/json/';

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

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirecUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch(err => dispatch(setError(err)));
  };
};

export const getCountry = () => (dispatch) => {
  const { reducer } = store.getState();
  if (reducer.country.length === 0) {
    dispatch({
      type: TYPES.GET_COUNTRY,
    });

    axios.get(urlCity)
      .then(({ data }) => dispatch(getCountrySuccess(data)))
      .catch(err => console.log(err));
  }
};
