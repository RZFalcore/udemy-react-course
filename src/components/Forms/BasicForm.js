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

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    changeValueHandler: changeLastNameHandler,
    inputOnBlurHandler: lastNameOnBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailValid,
    hasError: emailHasError,
    changeValueHandler: changeEmailHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmail,
  } = useInput((email) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(
      "Name: ",
      nameValue,
      "Surname: ",
      lastNameValue,
      "Email: ",
      emailValue
    );

    resetName();
    resetLastName();
    resetEmail();
  };

  const nameStyles = nameHasError ? "form-control invalid" : "form-control";
  const lastNameStyles = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailStyles = emailHasError ? "form-control invalid" : "form-control";

  const formIsValid = nameIsValid && lastNameIsValid && emailValid;

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
        <div className={lastNameStyles}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={changeLastNameHandler}
            onBlur={lastNameOnBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Surname is not valid!</p>
          )}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailValue}
          onChange={changeEmailHandler}
          onBlur={emailOnBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
