import TYPES from '../../utils/Types';

const initialState = {
  pending: true,
  country: '',
  cityId: 1,
  countryData: {},
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_COUNTRY:
      return {
        ...state,
        pending: false,
        country: action.country,
        countryData: action.countryData,
      };
    case TYPES.SET_CITY_ID:
      return {
        ...state,
        cityId: action.cityId,
      };
    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
