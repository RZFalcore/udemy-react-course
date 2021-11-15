import React from "react";
import styles from "./CheckoutInput.module.css";

const CheckoutInput = ({ value, id, label, onChange, onBlur, hasError }) => {
  const wrapStyles = hasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <div className={wrapStyles}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasError && <p>Please enter valid {id}!</p>}
    </div>
  );
};

export default CheckoutInput;
