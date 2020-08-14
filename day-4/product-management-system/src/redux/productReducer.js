import * as ProductActionTypes from "./productActionTypes";
const initialState = {
  products: [],
  loading: true,
  error: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        error: "",
        loading: false,
        products: action.value,
      };

    case ProductActionTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ProductActionTypes.GET_ALL_PRODUCTS_FAILURE:
      return {
        products: [],
        error: action.value,
        loading: false,
      };

    default:
      return state;
  }
};
