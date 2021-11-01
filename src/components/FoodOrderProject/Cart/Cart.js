import React from "react";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = () => {
  const cartItems = [{ id: "1", name: "Sushi", amount: 3, price: 14.5 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div>
        <span>Total amount</span>
        <span>50</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt}>Close</button>
        <button className={styles.buttin}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
