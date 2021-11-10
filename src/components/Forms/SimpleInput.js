import React, { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const inputValueIsValid = inputValue.trim() !== "";
  const inputIsValid = !inputValueIsValid && inputWasTouched;

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputOnBlurHandler = (e) => {
    setInputWasTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setInputWasTouched(true);

    if (!inputValueIsValid) return;

    setInputValue("");
    setInputWasTouched(false);
  };

  const formStyles = inputIsValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeInputHandler}
          onBlur={inputOnBlurHandler}
          value={inputValue}
        />
        {inputIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
