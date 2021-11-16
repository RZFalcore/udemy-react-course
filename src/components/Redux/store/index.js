import { createStore } from "redux";

const defaultState = { counter: 0 };

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "ADD":
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
