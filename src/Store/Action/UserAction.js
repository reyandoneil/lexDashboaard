import axios from 'axios';
import {
  isLoading,
} from '../Action/GlobalAction';
import { SET_IS_LOGIN } from './';
const loginFakeUrl =
  'https://dummyserver01.herokuapp.com/employe/login';

export const setIsLogin = (payload) => {
  return {
    type: SET_IS_LOGIN,
    payload,
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    const onSuccess = (dataLogin) => {
      dispatch(setIsLogin(true));
      dispatch(isLoading(false));
      localStorage.setItem(
        'access_token',
        dataLogin.data.access_token
      );
    };
    const onError = (error) => {
      dispatch(isLoading(false));
    };

    try {
      dispatch(isLoading(true));
      const dataLogin = await axios.post(loginFakeUrl, {
        email,
        password,
      });
      return onSuccess(dataLogin);
    } catch (error) {
      onError(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const onSuccess = () => {
      dispatch(setIsLogin(false));
    };
    const onError = () => {};

    try {
      const deleteToken = await localStorage.removeItem(
        'access_token'
      );
      onSuccess(deleteToken);
    } catch (error) {
      onError();
    }
  };
};
