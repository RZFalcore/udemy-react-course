import React, { useState } from "react";
// import Wrapper from "../Helpers/Wrapper";
import "./AddUser.css";

const AddUser = ({ addUser, setError }) => {
  const [user, setUser] = useState({ id: null, user: "", age: "" });

  const inputHandler = (e) => {
    setUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.user.trim().length === 0 || user.age <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    addUser(user);
    setUser({ id: null, user: "", age: "" });
  };

  return (
    <React.Fragment>
      <form className="addUserForm" onSubmit={submitHandler}>
        <div className="addUserContainer">
          <label>User name</label>
          <input
            className="addUserInput"
            name="user"
            type="text"
            onChange={inputHandler}
            value={user.user}
          />
        </div>
        <div className="addUserContainer">
          <label>Age (years)</label>
          <input
            className="addUserInput"
            name="age"
            type="number"
            onChange={inputHandler}
            value={user.age}
          />
          <button type="submit" className="addUserSubmit">
            Add user
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddUser;
