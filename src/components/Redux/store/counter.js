import { createSlice } from "@reduxjs/toolkit";

const defaultCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
