import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    add(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1, showCounter: state.showCounter };
//     case "ADD":
//       return { ...state, counter: state.counter + action.payload };
//     case "TOGGLE":
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

export const counterActions = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });

export default store;
