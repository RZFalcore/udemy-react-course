import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../components/ReduxCart/store/cartReducer";

import Cart from "../components/ReduxCart/Cart/Cart";
import Layout from "../components/ReduxCart/Layout/Layout";
import Products from "../components/ReduxCart/Shop/Products";

function ReduxApp() {
  const cart = useSelector((state) => state.cart.cart);
  const showCart = useSelector((state) => state.cart.showCart);

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
      const response = fetch(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok)
        dispatch(
          cartActions.setNotification({
            status: "error",
            title: "Errror",
            message: "Send cart data error",
          })
        );

      // const responseData = await response.json();

      dispatch(
        cartActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Fetching cart successfully!",
        })
      );
    };
  }, [cart, dispatch]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default ReduxApp;
