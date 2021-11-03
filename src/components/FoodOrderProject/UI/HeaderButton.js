import React, { useState, useEffect, useContext } from "react";
import CartContext from "../store/cartContent";
import CartIcon from "./CartIcon";
import styles from "./HeaderButton.module.css";

const Button = ({ onOpenModal }) => {
  const [btnHighlighted, setbtnHighlighted] = useState(false);
  const context = useContext(CartContext);
  const btnStyles = `${styles.button} ${btnHighlighted ? styles.bump : ""}`;
  const { items } = context;

  useEffect(() => {
    if (items.length === 0) return;

    setbtnHighlighted(true);

    const timer = setTimeout(() => {
      setbtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const cartQuantity = context.items.reduce(
    (current, item) => current + item.amount,
    0
  );

  return (
    <button className={btnStyles} onClick={onOpenModal}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default Button;
