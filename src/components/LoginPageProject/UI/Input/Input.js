import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = ({ id, label, type, value, isValid, onChange, onBlur }, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default React.forwardRef(Input);
