import React from "react";
import useInput from "../hooks/useInput";
import styles from "./Checkout.module.css";

const Checkout = ({ onCloseModal }) => {
  const isNotEmpty = (value) => value.trim().length > 0;

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeValueHandler: changeNameValue,
    onBlurHandler: nameBlur,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formIsValid = nameIsValid;
    console.log(formIsValid);
    if (!formIsValid) {
      return;
    }
    console.log(name);

    nameReset();
  };

  const nameStyles = nameHasError
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div className={nameStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={changeNameValue}
          onBlur={nameBlur}
        />
        {nameHasError && <p>Please enter valid name!</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCloseModal}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
