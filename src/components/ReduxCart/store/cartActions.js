import { cartActions } from "./cartReducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const resposne = await fetch(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!resposne.ok) throw new Error("Could not fetch data...");

      const data = await resposne.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cart || [],
          totalQuantity: cartData.totalQuantity,
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
