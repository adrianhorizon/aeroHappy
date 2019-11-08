import TYPES from '../../utils/types';

const initialState = {
  loading: false,
  country: '',
  cityId: '',
  countryData: {},
  user: {},
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_COUNTRY:
      return {
        ...state,
        loading: false,
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
    case TYPES.GET_ITEMS:
      return {
        ...state,
        offers: action.payload,
      };
    case TYPES.ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
