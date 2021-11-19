import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {
  cartItems: [{ id: 1, title: "Test Item", quantity: 3, total: 18, price: 6 }],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
