import { SET_IS_ADD_HOTEL } from './index';

export const setIsAddHotel = (payload) => {
  return {
    type: SET_IS_ADD_HOTEL,
    payload,
  };
};
