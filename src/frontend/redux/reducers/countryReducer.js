import { SET_COUNTRY, SET_CITY_ID } from '../../utils/types';

const initialState = {
  pending: true,
  country: '',
  cityId: 1,
  countryData: {},
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return {
        ...state,
        pending: false,
        country: action.country,
        countryData: action.countryData,
      };

    case SET_CITY_ID:
      return {
        ...state,
        cityId: action.cityId,
      };

    default:
      return state;
  }
};

export default countryReducer;
