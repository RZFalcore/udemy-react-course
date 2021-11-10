import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);

    const refInputValue = inputRef.current.value;
    console.log(refInputValue);

    // refInputValue.current.value = "";  --- POSSIBLE, BUT NOT RECOMENDED
    setInputValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={changeInputHandler}
          value={inputValue}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
