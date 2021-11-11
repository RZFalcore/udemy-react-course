import React, { useState } from "react";
import useInput from "./hooks/useInput";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    changeValueHandler: changeNameHandler,
    valueOnBlurHandler: nameOnBlurHandler,
    reset: resetName,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const [emailValue, setEmailValue] = useState("");
  const [emailWasTouched, setEmailWasTouched] = useState(false);

  const changeEmailHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const emailOnBlurHandler = (e) => {
    setEmailWasTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Name: ", nameValue, "Email: ", emailValue);

    resetName();

    setEmailValue("");
    setEmailWasTouched(false);
  };

  const ValidateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };

  const emailValueIsValid = ValidateEmail(emailValue);
  const emailIsValid = !emailValueIsValid && emailWasTouched;

  const formIsValid = nameIsValid && emailValueIsValid ? true : false;

  const nameformStyles = nameHasError ? "form-control invalid" : "form-control";
  const emailformStyles = emailIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameformStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeNameHandler}
          onBlur={nameOnBlurHandler}
          value={nameValue}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailformStyles}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={changeEmailHandler}
          onBlur={emailOnBlurHandler}
          value={emailValue}
        />
        {emailIsValid && <p className="error-text">Please enter valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
