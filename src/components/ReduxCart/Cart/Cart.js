import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartList = cartItems.map(({ id, title, quantity, total, price }) => (
    <CartItem key={id} item={{ id, title, quantity, total, price }} />
  ));
  return (
    <Card className={styles.cart}>
      {cartItems.length ? (
        <>
          <h2>Your Shopping Cart</h2>
          <ul>{cartList}</ul>
        </>
      ) : (
        <h2>Your cart is empty!</h2>
      )}
    </Card>
  );
};

export default Cart;
