import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCartData,
  sentCartData,
} from "../components/ReduxCart/store/cartActions";

import Cart from "../components/ReduxCart/Cart/Cart";
import Layout from "../components/ReduxCart/Layout/Layout";
import Products from "../components/ReduxCart/Shop/Products";
import Notification from "../components/ReduxCart/UI/Notification";

let isIntial = true;

function ReduxApp() {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const changed = useSelector((state) => state.cart.changed);
  const showCart = useSelector((state) => state.cart.showCart);
  const notification = useSelector((state) => state.cart.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return;
    }
    if (changed) dispatch(sentCartData({ cart, totalQuantity }));
  }, [cart, changed, totalQuantity, dispatch]);

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
