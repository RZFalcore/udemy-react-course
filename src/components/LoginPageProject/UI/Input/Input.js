import React from "react";
import classes from "./Input.module.css";

const Input = ({
  id,
  label = "E-Mail",
  type = "email",
  value,
  isValid,
  onChange,
  onBlur,
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
