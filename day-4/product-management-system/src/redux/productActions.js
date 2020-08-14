import * as ProductActionTypes from "./productActionTypes";
import { getProducts } from "../service/ProductService";
// const axios = require("axios");

export const getProductsSuccessActionCreator = (products) => {
  return {
    type: ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS,
    value: products,
  };
};

export const getProductsRequestActionCreator = () => {
  return {
    type: ProductActionTypes.GET_ALL_PRODUCTS_REQUEST,
  };
};

export const getProductsFailureActionCreator = (errorMessage) => {
  return {
    type: ProductActionTypes.GET_ALL_PRODUCTS_FAILURE,
    value: errorMessage,
  };
};

export const fetchProductsAsync = () => {
  return (dispatch) => {
    dispatch(getProductsRequestActionCreator());

    getProducts()
      .then((response) => {
        const action = getProductsSuccessActionCreator(response.data);
        dispatch(action);
      })
      .catch((err) => {
        const action = getProductsFailureActionCreator(err.message);
        dispatch(action);
      });
  };
};
