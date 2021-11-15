import React, { useState, useContext } from "react";
import CartContext from "../store/cartContent";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onCloseModal }) => {
  const [checkout, setCheckout] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartHasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    setCheckout(true);
  };

  const confirmHandler = (userData) => {
    const reqData = { user: userData, orderedItems: cartCtx.items };

    setIsSubmitted(true);
    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      { method: "POST", body: JSON.stringify(reqData) }
    );

    cartCtx.clearItems();
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      {...item}
      onAdd={addCartItemHandler.bind(null, item)}
      onRemove={removeCartItemHandler.bind(null, item.id)}
    />
  ));

  const cartView = (
    <React.Fragment>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && (
        <Checkout onConfirm={confirmHandler} onCloseModal={onCloseModal} />
      )}
      {!checkout && (
        <div className={styles.actions}>
          <button className={styles.buttonAlt} onClick={onCloseModal}>
            Close
          </button>
          {cartHasItems && (
            <button className={styles.button} onClick={checkoutHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const submittedCart = (
    <React.Fragment>
      <h2>Success!</h2>
      <p>Someone contact you ASAP!</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={onCloseModal}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onCloseModal={onCloseModal}>
      {!isSubmitted && cartView}
      {isSubmitted && submittedCart}
    </Modal>
  );
};

export default Cart;
