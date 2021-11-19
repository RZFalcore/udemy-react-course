import { useSelector } from "react-redux";

import Cart from "../components/ReduxCart/Cart/Cart";
import Layout from "../components/ReduxCart/Layout/Layout";
import Products from "../components/ReduxCart/Shop/Products";

function ReduxApp() {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default ReduxApp;
