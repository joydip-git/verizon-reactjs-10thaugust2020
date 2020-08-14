import rootReducer from "./index";
import reduxLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const productStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxLogger, thunkMiddleware))
);
export default productStore;
