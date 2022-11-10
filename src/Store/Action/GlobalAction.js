import {
  SET_SCREEN_SIZE,
  SET_IS_LOADING,
  SET_PROFILE_CONTENT,
  IS_MESSAGE,
  MESSAGE,
  IS_EDIT_MODAL,
  IS_ALERT,
  SET_IS_NO_DATA,
  GET_AIRLINES,
} from "./index";
import { getAllAirlines } from "../Api/global-api";

export const getAirlines = (text, page) => {
  return async (dispatch) => {
    try {
      const findAllAirlines = await getAllAirlines(text, page);
      dispatch({
        type: GET_AIRLINES,
        payload: findAllAirlines.data,
      });
    } catch (error) {}
  };
};

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

export const profileContentName = (payload) => {
  return {
    type: SET_PROFILE_CONTENT,
    payload,
  };
};

export const isMessage = (payload) => {
  return {
    type: IS_MESSAGE,
    payload,
  };
};

export const message = (payload) => {
  return {
    type: MESSAGE,
    payload,
  };
};

export const isEditModal = (payload) => {
  return {
    type: IS_EDIT_MODAL,
    payload,
  };
};

export const setIsAlert = (payload) => {
  return {
    type: IS_ALERT,
    payload,
  };
};

export const setIsNoData = (payload) => {
  return {
    type: SET_IS_NO_DATA,
    payload,
  };
};
