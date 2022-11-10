import axios from "axios";
const packageTourUrl = "https://localhost:44359/api/PackageTour";
//GET ALL PRODUCT BY COMPANY ID
export const getAllProductApi = (companyId) => {
  return axios.get(`${packageTourUrl}/?companyId=${companyId}`);
};
//ADD PRODUCT
export const addProductApi = (payload) => {
  return axios.post(packageTourUrl, payload);
};
//ADD PRODUCT
export const editProductApi = (payload) => {
  return axios.put(packageTourUrl, payload);
};
//DELATE PRODUCT
export const delateProductApi = (productId) => {
  return axios.delete(`${packageTourUrl}/${productId}`);
};
