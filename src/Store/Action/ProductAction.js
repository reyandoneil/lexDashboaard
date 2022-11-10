import Delay from "../../Helper/Delay";
import { message, isMessage, isEditModal, isLoading, setIsAlert } from "./GlobalAction";
import { setIsAddHotel } from "./HotelAction";
import {
  GET_DATA_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  SET_IS_LOADING_PRODUCT,
  SET_NO_DATA_PRODUCT,
  SET_DATA_EDIT_PRODUCT,
} from "./index";

import {
  getAllProductApi,
  addProductApi,
  editProductApi,
  delateProductApi
} from "../Api/product-api";

export const setLoadingProduct = (payload) => {
  return {
    type: SET_IS_LOADING_PRODUCT,
    payload,
  };
};

export const setNoData = (payload) => {
  return {
    type: SET_NO_DATA_PRODUCT,
    payload,
  };
};

export const getAllProductByCompanyId = (companyId) => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingProduct(true));
      const getDataProduct = await getAllProductApi(companyId);
      dispatch(setLoadingProduct(false));
      dispatch({
        type: GET_DATA_PRODUCT,
        payload: getDataProduct.data,
      });
    } catch (err) {
      dispatch(setLoadingProduct(true));
      console.log(err);
    }
  }; 
};

export const setDataEditProduct = (payload) => {
  return {
    type: SET_DATA_EDIT_PRODUCT,
    payload,
  };
};

export const addProduct = (dataProduct) => {
  return async (dispatch) => {
    const {
      companyId,
      packageName,
      totalDays,
      quota,
      active,
      userIdCreatedBy,
    } = dataProduct;
    try {
      dispatch(isLoading(true));
      const payload = {
        headers: {},
        companyId,
        packageName,
        totalDays,
        quota,
        active,
        userIdCreatedBy,
      };
      const result = await addProductApi(payload);
      dispatch(getAllProductByCompanyId(companyId));
      dispatch(isLoading(false));
      dispatch(isMessage(true));
      dispatch(
        message({
          msg: "Success add product.",
          status: "success",
        })
      );
      dispatch({
        type: ADD_PRODUCT,
        payload: result,
      });
      dispatch(setIsAddHotel(false));
      Delay(3000).then(() => dispatch(isMessage(false)));
    } catch (error) {
      console.error(error);
      dispatch(isLoading(false));
      dispatch(isMessage(true));
      dispatch(
        message({
          msg: error.message,
          status: "error",
        })
      );
      Delay(3000).then(() => dispatch(isMessage(false)));
    }
  };
};

export const editProduct = (dataEditProduct) => {
  return async (dispatch) => {
    const {
      id,
      companyId,
      packageName,
      totalDays,
      quota,
      active,
      userIdCreatedBy,
    } = dataEditProduct;

    try {
    dispatch(isLoading(true));
    const payload = {
        headers: {},
        id,
        companyId,
        packageName,
        totalDays,
        quota,
        active,
        userIdCreatedBy,
      };
      const editProduct = await editProductApi(payload);
      dispatch(getAllProductByCompanyId(companyId));
      dispatch(isMessage(true));
      dispatch(isEditModal(false));
      dispatch(isLoading(false));
      dispatch(
        message({
          msg: "Success edit product.",
          status: "success",
        })
      );
      Delay(3000).then(() => dispatch(isMessage(false)));
      dispatch({
        type: EDIT_PRODUCT,
        payload: editProduct,
      });
    } catch (error) {
      console.error(error)
      dispatch(isEditModal(false));
      dispatch(isLoading(false));
      dispatch(isMessage(true));
      dispatch(
        message({
          msg: error.message,
          status: "error",
        })
      );
      Delay(3000).then(() => dispatch(isMessage(false)));
    }
  };
};

export const delateProduct = (data) => {
  return async (dispatch) => {
    try {
    const idProduct = data.id
    const companyId = data.companyId 
    dispatch(isLoading(true));
    const deleteProduct = await delateProductApi(idProduct)
    dispatch(getAllProductByCompanyId(companyId))
    dispatch(isMessage(true));
    dispatch(setIsAlert(false));
    dispatch(isLoading(false));
    dispatch(
      message({
        msg: "Success delate product.",
        status: "success",
      })
    );
    Delay(3000).then(() => dispatch(isMessage(false)));
    dispatch({
      type: DELETE_PRODUCT,
      payload: deleteProduct,
    });
    } catch (error) {
      dispatch(isLoading(false));
      dispatch(isMessage(true));
      dispatch(
        message({
          msg: error.message,
          status: "error",
        })
      );
      Delay(3000).then(() => dispatch(isMessage(false)));
    }
  }
}
