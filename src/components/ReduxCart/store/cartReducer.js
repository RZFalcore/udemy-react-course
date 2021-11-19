import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {
  cartItems: [{ id: 1, title: "Test Item", quantity: 3, total: 18, price: 6 }],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {
    incQuantity(state, action) {
      state.cartItems.find((item) => item.id === action.payload).quantity += 1;
    },
    decQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else if (item.quantity === 1)
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
