import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartReducer";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  const cartLength = useSelector((state) => state.cart.cartItems).length;
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
