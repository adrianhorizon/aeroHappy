import { SET_CITY_ID } from '../../utils/types';

// eslint-disable-next-line import/prefer-default-export
export const setCity = cityId => (dispatch) => {
  dispatch({ type: SET_CITY_ID, cityId });
};
