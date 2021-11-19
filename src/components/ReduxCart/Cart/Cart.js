import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ id, title, quantity, total, price }) => (
          <CartItem key={id} item={{ title, quantity, total, price }} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
