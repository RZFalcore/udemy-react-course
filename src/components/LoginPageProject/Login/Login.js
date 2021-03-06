import React, { useEffect, useReducer, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import formReducer from "./LoginReducer";
import classes from "./Login.module.css";
import Input from "../UI/Input/Input";

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

  const emailRef = useRef();
  const passwordRef = useRef();

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
    if (loginForm.formIsValid) {
      props.onLogin(loginForm.email.value, loginForm.password.value);
    } else if (!isEmailValid) {
      emailRef.current.focus();
    } else {
      passwordRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          value={loginForm.email.value}
          ref={emailRef}
          isValid={loginForm.email.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={loginForm.password.value}
          ref={passwordRef}
          isValid={loginForm.password.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
