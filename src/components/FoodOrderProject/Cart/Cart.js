import React from "react";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";

const Cart = ({ closeModal }) => {
  const cartItems = [{ id: "1", name: "Sushi", amount: 3, price: 14.5 }].map(
    (item) => <li key={item.id}>{item.name}</li>
  );
  return (
    <Modal closeModal={closeModal}>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div>
        <span>Total amount</span>
        <span>50</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={closeModal}>
          Close
        </button>
        <button className={styles.buttin}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
