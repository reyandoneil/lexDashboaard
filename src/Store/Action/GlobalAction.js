import { SET_SCREEN_SIZE, SET_IS_LOADING } from './index';

export const setScreenSize = (payload) => {
  return {
    type: SET_SCREEN_SIZE,
    payload,
  };
};

export const isLoading = (payload) => {
  return {
    type: SET_IS_LOADING,
    payload,
  };
};
