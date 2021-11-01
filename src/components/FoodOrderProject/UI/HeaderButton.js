import React, { useContext } from "react";
import CartContext from "../store/cartContent";
import CartIcon from "./CartIcon";
import styles from "./HeaderButton.module.css";

const Button = ({ onOpenModal }) => {
  const context = useContext(CartContext);
  const cartQuantity = context.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onOpenModal}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default Button;
