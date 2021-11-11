import { useReducer } from "react";

const defaultState = { value: "", isTouched: false };

const inputReducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE":
      return { value: payload, isTouched: state.isTouched };
    case "BLUR":
      return { value: state.value, isTouched: true };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      return state;
  }
};

const useInput = (validator) => {
  const [inputState, dispatch] = useReducer(inputReducer, defaultState);

  const changeValueHandler = (e) => {
    dispatch({ type: "CHANGE", payload: e.target.value });
  };

  const inputOnBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const isValid = validator(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  return {
    value: inputState.value,
    isValid,
    hasError,
    changeValueHandler,
    inputOnBlurHandler,
    reset,
  };
};

export default useInput;
