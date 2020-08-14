const reduxLogger = require("redux-logger");
const thunkMiddleware = require("redux-thunk");
const redux = require("redux");
const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
const GET_ALL_PRODUCTS_FAILURE = "GET_ALL_PRODUCTS_FAILURE";

const initialState = {
  products: [],
  loading: true,
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        error: "",
        loading: false,
        products: action.value,
      };

    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        products: [],
        error: action.value,
        loading: false,
      };

    default:
      return state;
  }
};

const store = createStore(
  productReducer,
  applyMiddleware(logger, thunkMiddleware.default)
);

const fetchProductsAsync = () => {
  return (dispatch) => {
    dispatch(getProductsRequestActionCreator());
    axios
      .get("http://127.0.0.1:8081/productservice")
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

//store.dispatch(fetchProductsAsync()); //?
