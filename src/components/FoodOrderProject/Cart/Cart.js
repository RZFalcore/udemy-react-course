import React, { useContext } from "react";
import CartContext from "../store/cartContent";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ onCloseModal }) => {
  const cartCtx = useContext(CartContext);

  const cartHasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id)}
    />
  ));
  return (
    <Modal onCloseModal={onCloseModal}>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={onCloseModal}>
          Close
        </button>
        {cartHasItems && <button className={styles.buttin}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
