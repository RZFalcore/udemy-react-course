import { createSlice } from "@reduxjs/toolkit";

const defaultCart = {
  cartItems: [{ id: 1, title: "Test Item", quantity: 3, total: 18, price: 6 }],
  showCart: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCart,
  reducers: {
    incQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity += 1;
      item.total = item.price * item.quantity;
    },
    decQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
      } else if (item.quantity === 1)
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
    },
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.title === action.payload.title
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({ ...action.payload });
      }
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

export const sentCartData = (cart) => {
  console.log("SentCartData");
  return async (dispatch) => {
    dispatch(
      cartActions.setNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      console.log(response);

      if (!response.ok) throw new Error("Send cart data error");
    };

    try {
      await sendRequest();

      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Fetching cart successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
