import React from "react";
import CartIcon from "./CartIcon";
import styles from "./HeaderButton.module.css";

const Button = ({ onOpenModal }) => {
  return (
    <button className={styles.button} onClick={onOpenModal}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default Button;
