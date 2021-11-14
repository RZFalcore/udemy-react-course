import { useState } from "react";

const useInputValidation = (validator) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const isValid = validator(value);
  const hasError = !isValid && isTouched;

  return { value, isValid, hasError, changeValueHandler, onBlurHandler, reset };
};

export default useInputValidation;
