import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL_INPUT":
      return {
        ...state,
        email: { value: payload, isValid: payload.includes("@") },
      };
    case "PASSWORD_INPUT":
      return {
        ...state,
        password: { value: payload, isValid: payload.trim().length > 6 },
      };
    case "ON_BLUR_EMAIL":
      return {
        ...state,
        email: {
          value: state.email.value,
          isValid: state.email.value.includes("@"),
        },
      };
    case "ON_BLUR_PASSWORD":
      return {
        ...state,
        password: {
          value: state.password.value,
          isValid: state.password.value.trim().length > 6,
        },
      };
    // case "FORM_IS_VALID":
    //   return { ...state, formIsValid: payload };
    default:
      return state;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [loginForm, loginFormDispatch] = useReducer(formReducer, {
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const { isValid: isEmailValid } = loginForm.email;
  const { isValid: isPasswordValid } = loginForm.password;

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);
    return () => {
      clearTimeout(debouncer);
    };
  }, [isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event) => {
    loginFormDispatch({ type: "EMAIL_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    loginFormDispatch({ type: "PASSWORD_INPUT", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    loginFormDispatch({ type: "ON_BLUR_EMAIL" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    loginFormDispatch({ type: "ON_BLUR_PASSWORD" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(loginForm.email.value, loginForm.password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            loginForm.email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={loginForm.email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            loginForm.password.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={loginForm.password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
