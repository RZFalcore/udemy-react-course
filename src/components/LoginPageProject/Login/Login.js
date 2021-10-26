import React, { useEffect, useReducer } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import formReducer from "./LoginReducer";
import classes from "./Login.module.css";

const Login = (props) => {
  const [loginForm, loginFormDispatch] = useReducer(formReducer, {
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
    formIsValid: false,
  });

  const { isValid: isEmailValid } = loginForm.email;
  const { isValid: isPasswordValid } = loginForm.password;

  useEffect(() => {
    const debouncer = setTimeout(() => {
      formValidationHandler(isEmailValid, isPasswordValid);
    }, 300);
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
    loginFormDispatch({ type: "ON_BLUR_EMAIL" });
  };

  const validatePasswordHandler = () => {
    loginFormDispatch({ type: "ON_BLUR_PASSWORD" });
  };

  const formValidationHandler = () => {
    loginFormDispatch({ type: "FORM_IS_VALID" });
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
          <Button
            type="submit"
            className={classes.btn}
            disabled={!loginForm.formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
