import React from "react";
import useInput from "../hooks/useInput";
import Input from "../UI/CheckoutInput";
import styles from "./Checkout.module.css";

const Checkout = ({ onConfirm, onCloseModal }) => {
  const isNotEmpty = (value) => value.trim().length > 0;
  const hasFiveChars = (value) => value.trim().length === 5;

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeValueHandler: changeNameValue,
    onBlurHandler: nameBlur,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    changeValueHandler: changeStreetValue,
    onBlurHandler: streetBlur,
    reset: streetReset,
  } = useInput(isNotEmpty);

  const {
    value: postal,
    isValid: postalIsValid,
    hasError: postalHasError,
    changeValueHandler: changePostalValue,
    onBlurHandler: postalBlur,
    reset: postalReset,
  } = useInput(hasFiveChars);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    changeValueHandler: changeCityValue,
    onBlurHandler: cityBlur,
    reset: cityReset,
  } = useInput(isNotEmpty);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formIsValid =
      nameIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({ name, street, postal, city });

    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        value={name}
        id="name"
        label="Your name"
        onChange={changeNameValue}
        onBlur={nameBlur}
        hasError={nameHasError}
      />
      <Input
        value={street}
        id="street"
        label="Your street"
        onChange={changeStreetValue}
        onBlur={streetBlur}
        hasError={streetHasError}
      />
      <Input
        value={postal}
        id="postal"
        label="Postal code"
        onChange={changePostalValue}
        onBlur={postalBlur}
        hasError={postalHasError}
      />
      <Input
        value={city}
        id="city"
        label="City"
        onChange={changeCityValue}
        onBlur={cityBlur}
        hasError={cityHasError}
      />
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
