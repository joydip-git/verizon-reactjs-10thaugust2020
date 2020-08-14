const redux = require("redux");
const logger = require("redux-logger");

//action types:
const INCREASE_NUMBER = "INCREASE_NUMBER";
const DECREASE_NUMBER = "DECREASE_NUMBER";

//actions/action creators
const increaseAction = (valueToAdd) => {
  return {
    type: INCREASE_NUMBER,
    value: valueToAdd,
  };
};

const decreaseAction = (valueToSubtract) => {
  return {
    type: DECREASE_NUMBER,
    value: valueToSubtract,
  };
};

//state=>JS Object
const initialState = { counter: 100 };
//reducer
const counterReducer = function (state = initialState, action) {
  let newState = null;
  switch (action.type) {
    case INCREASE_NUMBER:
      newState = {
        ...state,
        counter: state.counter + action.value,
      };
      break;
    case DECREASE_NUMBER:
      newState = { ...state, counter: state.counter - action.value };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};

const middleware = redux.applyMiddleware;
const reduxLogger = logger.createLogger();
const store = redux.createStore(counterReducer, middleware(reduxLogger));

console.log("initial state", store.getState());
const subscription = store.subscribe(() => {
  return "state updated";
});

store.dispatch(increaseAction(10));
store.dispatch(increaseAction(10));
store.dispatch(decreaseAction(5));
console.log("state", store.getState());
subscription();
