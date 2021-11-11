import { useState } from "react";

const useInput = (validator) => {
  const [value, setValue] = useState("");
  const [inputWasTouched, setInputWasTouched] = useState(false);

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const inputOnBlurHandler = (e) => {
    setInputWasTouched(true);
  };

  const reset = () => {
    setValue("");
    setInputWasTouched(false);
  };

  const isValid = validator(value);
  const hasError = !isValid && inputWasTouched;

  return {
    value,
    isValid,
    hasError,
    changeValueHandler,
    inputOnBlurHandler,
    reset,
  };
};

export default useInput;
