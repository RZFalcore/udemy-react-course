import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/authContext";

import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPassRef = useRef();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const newPassword = newPassRef.current.value;

    if (newPassword.trim().length < 6) {
      alert("Password too short! Type at least 6 chars.");
    }

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authContext.token,
          password: newPassword,
          returnSecureToken: false,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.error?.message) {
          throw new Error(data.error.message);
        } else {
          console.log("Success!");
          navigate("/");
        }
      })
      .catch((e) => alert(e));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPassRef} type="password" id="new-password" />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
