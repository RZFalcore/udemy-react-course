import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {
  cartItems: [],
  totalQuantity: 0,
  changed: false,
  showCart: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
        // state.totalQuantity += 1;
        state.changed = true;
      } else {
        state.cartItems.push({ ...action.payload });
      }
      state.totalQuantity += 1;
    },
    removeItemFromCart(state, action) {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
      } else if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalQuantity -= 1;
      state.changed = true;
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
