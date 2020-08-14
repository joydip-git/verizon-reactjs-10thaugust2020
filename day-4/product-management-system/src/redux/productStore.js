import { productReducer } from "./productReducer";
import reduxLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

//const logger = reduxLogger.createLogger();

const store = createStore(
  productReducer,
  applyMiddleware(reduxLogger, thunkMiddleware)
);
export default store;
