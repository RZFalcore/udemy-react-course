import { createStore } from "redux";

const defaultState = { counter: 0, showCounter: false };

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1, showCounter: state.showCounter };
    case "ADD":
      return { ...state, counter: state.counter + action.payload };
    case "TOGGLE":
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
