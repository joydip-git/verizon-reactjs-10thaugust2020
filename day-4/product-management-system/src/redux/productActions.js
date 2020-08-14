import * as ProductActionTypes from "./productActionTypes";
import { getProducts, addProduct } from "../service/ProductService";

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

export const addProductSuccessActionCreator = (respMessage) => {
  return {
    type: ProductActionTypes.ADD_PRODUCT_SUCCESS,
    value: respMessage,
  };
};

export const addProductRequestActionCreator = () => {
  return {
    type: ProductActionTypes.ADD_PRODUCT_REQUEST,
  };
};

export const addProductFailureActionCreator = (errorMessage) => {
  return {
    type: ProductActionTypes.ADD_PRODUCT_FAILURE,
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

export const addProductsAsync = (product, callback) => {
  return (dispatch) => {
    dispatch(addProductRequestActionCreator());
    console.log(product);
    addProduct(product)
      .then((response) => {
        const action = addProductSuccessActionCreator(response.data.message);
        callback(response.data.message);
        dispatch(action);
      })
      .catch((err) => {
        const action = addProductFailureActionCreator(err.message);
        dispatch(action);
      });
  };
};
