import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "../components/ReduxCart/Cart/Cart";
import Layout from "../components/ReduxCart/Layout/Layout";
import Products from "../components/ReduxCart/Shop/Products";

function ReduxApp() {
  const cart = useSelector((state) => state.cart.cart);
  const showCart = useSelector((state) => state.cart.showCart);

  useEffect(() => {
    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default ReduxApp;
