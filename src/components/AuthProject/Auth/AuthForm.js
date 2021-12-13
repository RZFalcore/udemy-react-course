import { useState, useRef } from "react";

import styles from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!isLogin) {
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ email, password, returnSecureToken: true }),
          // headers: { ContentType: "application/json" },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    }
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
