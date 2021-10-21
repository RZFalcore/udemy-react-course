import React, { useState } from "react";
import "./AddUser.css";

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState({ id: null, user: "", age: "" });

  const inputHandler = (e) => {
    setUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ id: null, user: "", age: "" });
  };

  return (
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
  );
};

export default AddUser;
