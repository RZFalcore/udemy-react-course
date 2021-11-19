import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {},
});

export const counterActions = cartSlice.actions;

export default cartSlice.reducer;
