import { addProductReducer } from "./addProductReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productState: productReducer,
  addProductState: addProductReducer,
});

export default rootReducer;
