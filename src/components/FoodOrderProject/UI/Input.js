import React from "react";
import styles from "./Input.module.css";

const Input = ({ input, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input type="text" {...input} />
    </div>
  );
};

export default Input;