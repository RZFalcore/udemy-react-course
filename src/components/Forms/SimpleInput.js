import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValueIsValid, setInputValueIsValid] = useState(true);

  const inputRef = useRef();

  const changeInputHandler = (e) => {
    if (!inputValueIsValid ) setInputValueIsValid(true)
    setInputValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      setInputValueIsValid(false)
    }
    console.log(inputValue);

    // const refInputValue = inputRef.current.value;
    // console.log(refInputValue);

    // refInputValue.current.value = "";  --- POSSIBLE, BUT NOT RECOMENDED
    setInputValue("");
  };

  const formStyles = inputValueIsValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={changeInputHandler}
          value={inputValue}
        />
        {!inputValueIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};;

export default SimpleInput;
