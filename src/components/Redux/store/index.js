import { createSlice, configureStore } from "@reduxjs/toolkit";

const defaultCounterState = { counter: 0, showCounter: false };
const defaultAuthState = { isAuth: false };

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

const authSlice = createSlice({
  name: "auth",
  initialState: defaultAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
