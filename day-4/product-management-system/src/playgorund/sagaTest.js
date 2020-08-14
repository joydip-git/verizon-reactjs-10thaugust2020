import * as ActionTypes from "../redux/productActionTypes";
import * as Actions from "../redux/productActions";
import { takeEvery, call, put } from "redux-saga/effects";
//import * as Service from "../service/ProductService";
//{type:'GET_All....'}
const getProducts = async () => {
  const response = await fetch("http://127.0.0.1:8081/productservice");
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.Errors);
  }
  return data;
};

function* loadProducts() {
  try {
    const products = yield call(getProducts);
    yield put(Actions.getProductsSuccessActionCreator(products));
  } catch (error) {
    yield put(Actions.getProductsFailureActionCreator(error.toString()));
  }
}
export default function* rootSaga() {
  console.log("called");
  yield takeEvery(ActionTypes.GET_ALL_PRODUCTS_REQUEST, loadProducts);
}
