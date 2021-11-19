import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartReducer";
import styles from "./CartItem.module.css";

const CartItem = ({ item: { id, title, quantity, total, price } }) => {
  const dispatch = useDispatch();

  const quantityIncrementHandler = () => dispatch(cartActions.incQuantity(id));

  const quantityDecrementHandler = () => dispatch(cartActions.decQuantity(id));

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={quantityDecrementHandler}>-</button>
          <button onClick={quantityIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
