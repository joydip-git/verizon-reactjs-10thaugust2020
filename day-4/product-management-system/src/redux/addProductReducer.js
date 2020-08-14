import * as ActionTypes from "./productActionTypes";
const initialState = {
  loading: true,
  error: "",
  responseMessage: "",
};
export const addProductReducer = (state = initialState, { type, value }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_REQUEST:
      return {
        error: "",
        loading: true,
        responseMessage: "",
      };
    case ActionTypes.ADD_PRODUCT_SUCCESS:
      return {
        error: "",
        loading: false,
        responseMessage: value,
      };

    case ActionTypes.ADD_PRODUCT_FAILURE:
      return {
        error: value,
        loading: false,
        responseMessage: "",
      };
    default:
      return state;
  }
};
