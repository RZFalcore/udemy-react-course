import React from "react";
import useInput from "./hooks/useInput2";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeValueHandler: changeNameHandler,
    inputOnBlurHandler: nameOnBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Name: ", nameValue);

    resetName();
  };

  const nameStyles = nameHasError ? "form-control invalid" : "form-control";
  const formIsValid = !nameIsValid;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameStyles}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={changeNameHandler}
            onBlur={nameOnBlurHandler}
          />
          {nameHasError && <p className="error-text">Name is not valid!</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
