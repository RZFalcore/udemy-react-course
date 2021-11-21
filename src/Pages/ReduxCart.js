import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sentCartData } from "../components/ReduxCart/store/cartReducer";

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
    // if (isIntial) {
    //   isIntial = false;
    //   return;
    // }

    dispatch(sentCartData(cart));
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
