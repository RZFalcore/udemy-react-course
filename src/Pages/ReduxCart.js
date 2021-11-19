import Cart from "../components/ReduxCart/Cart/Cart";
import Layout from "../components/ReduxCart/Layout/Layout";
import Products from "../components/ReduxCart/Shop/Products";

function ReduxApp() {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default ReduxApp;
