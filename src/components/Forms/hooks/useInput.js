import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [valueWasTouched, setValueWasTouched] = useState(false);

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const valueOnBlurHandler = (e) => {
    setValueWasTouched(true);
  };

  const isValid = validateValue(value);
  const hasError = !isValid && valueWasTouched;

  const reset = () => {
    setValue("");
    setValueWasTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    changeValueHandler,
    valueOnBlurHandler,
    reset,
  };
};

export default useInput;
