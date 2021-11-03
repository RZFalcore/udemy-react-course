import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const amount = +inputAmountRef.current.value;

    if (amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(amount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountIsValid && <p>Type correct amount (1-5).</p>}
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
