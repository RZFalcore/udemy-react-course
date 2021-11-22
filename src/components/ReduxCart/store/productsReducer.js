import { createSlice } from "@reduxjs/toolkit";

const defaultProducts = {
  productsItems: [
    {
      id: "p1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      title: "Test 2",
      price: 12,
      description: "Second product",
    },
  ],
};
const productsSlice = createSlice({
  name: "products",
  initialState: defaultProducts,
  reducers: {},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
