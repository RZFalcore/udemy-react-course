import React, { useState } from "react";

const SimpleInput = (props) => {
  const [nameValue, setNameValue] = useState("");
  const [nameWasTouched, setNameWasTouched] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailWasTouched, setEmailWasTouched] = useState(false);

  const changeNameHandler = (e) => {
    setNameValue(e.target.value);
  };

  const nameOnBlurHandler = (e) => {
    setNameWasTouched(true);
  };

  const changeEmailHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const emailOnBlurHandler = (e) => {
    setEmailWasTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameWasTouched(true);
    setEmailWasTouched(true);

    console.log("Name: ", nameValue, "Email: ", emailValue);

    setNameValue("");
    setEmailValue("");
    setNameWasTouched(false);
    setEmailWasTouched(false);
  };

  const ValidateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };

  const nameValueIsValid = nameValue.trim() !== "";
  const nameIsValid = !nameValueIsValid && nameWasTouched;

  const emailValueIsValid = ValidateEmail(emailValue);
  const emailIsValid = !emailValueIsValid && emailWasTouched;

  const formIsValid = nameValueIsValid && emailValueIsValid ? true : false;

  const nameformStyles = nameIsValid ? "form-control invalid" : "form-control";
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
        {nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailformStyles}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="name"
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
