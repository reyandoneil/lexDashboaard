import {
  message,
  isMessage,
  isLoading,
} from "../Action/GlobalAction";
import Delay from "../../Helper/Delay";
import { findAllHotel, createHotel } from "../Api/hotel-api";
import { ADD_HOTEL, GET_ALL_DATA_HOTEL, SET_IS_ADD_HOTEL } from "./index";

export const setIsAddHotel = (payload) => {
  return {
    type: SET_IS_ADD_HOTEL,
    payload,
  };
};

export const addHotel = (dataHotel) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const {
        hotelName,
        address,
        countryId,
        cityName,
        starsRating,
        userIdCreatedBy,
      } = dataHotel;
      const payload = {
        hotelName,
        address,
        countryId,
        cityName,
        starsRating,
        userIdCreatedBy,
      };
      const result = await createHotel(payload);
      dispatch(setIsAddHotel(false));
      dispatch(getAllHotel);
      dispatch(isLoading(false));
      dispatch(isMessage(true));
      dispatch(
        message({
          msg: "Success add hotel",
          status: "success",
        })
      );
      dispatch({
        type: ADD_HOTEL,
        payload: result,
      });
      Delay(3000).then(() => dispatch(isMessage(false)));
    } catch (error) {
      console.log(error);
      dispatch(isLoading(false));
      dispatch(isMessage(true));
      dispatch(
        message({
          msg: error.message,
          ststus: "error",
        })
      );
      Delay(3000).then(() => dispatch(isMessage(false)));
    }
  };
};

export const getAllHotel = () => {
  return async (dispatch) => {
    try {
      const allHotel = findAllHotel({
        headers: {},
      });
      dispatch({
        type: GET_ALL_DATA_HOTEL,
        payload: allHotel,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
