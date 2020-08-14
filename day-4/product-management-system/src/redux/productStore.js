import rootReducer from "./index";
import reduxLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../playgorund/sagaTest";

const sagaMiddleware = createSagaMiddleware();
const productStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxLogger, thunkMiddleware, sagaMiddleware)
  )
);
sagaMiddleware.run(rootSaga);
export default productStore;
