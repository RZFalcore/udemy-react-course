import React from "react";
import classes from "./Input.module.css";

const Input = ({
  isValid,
  label = "E-Mail",
  type = "email",
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
