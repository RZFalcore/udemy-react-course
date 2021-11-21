import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../components/ReduxCart/store/cartReducer";

import Cart from "../components/ReduxCart/Cart/Cart";
import Layout from "../components/ReduxCart/Layout/Layout";
import Products from "../components/ReduxCart/Shop/Products";
import Notification from "../components/ReduxCart/UI/Notification";

let isIntial = true;

function ReduxApp() {
  const cart = useSelector((state) => state.cart.cart);
  const showCart = useSelector((state) => state.cart.showCart);
  const notification = useSelector((state) => state.cart.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartActions.setNotification({
          status: "pending",
          title: "Fetching...",
          message: "Fetching cart data.",
        })
      );
      const response = await fetch(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      console.log(response);
      if (!response.ok) throw new Error("Send cart data error");

      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Fetching cart successfully!",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        cartActions.setNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default ReduxApp;
