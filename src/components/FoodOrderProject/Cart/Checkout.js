import React from "react";
import styles from "./Checkout.module.css";

const Checkout = () => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="adress">Your adress</label>
        <input type="text" id="adress" />
      </div>
      <button type="button">Cancel</button>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Checkout;
