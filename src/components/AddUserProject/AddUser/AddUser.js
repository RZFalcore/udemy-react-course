import React, { useRef } from "react";
import "./AddUser.css";

const AddUser = ({ addUser, setError }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [user, setUser] = useState({ id: null, user: "", age: "" });

  // const inputHandler = (e) => {
  //   setUser((prevState) => {
  //     return { ...prevState, [e.target.name]: e.target.value };
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const ageValue = ageInputRef.current.value;

    if (nameValue.trim().length === 0 || ageValue <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    addUser({ user: nameValue, age: ageValue, id: Math.random() * 1000 });
    // setUser({ id: null, user: "", age: "" });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            ref={nameInputRef}
            // onChange={inputHandler}
            // value={user.user}
          />
        </div>
        <div className="addUserContainer">
          <label>Age (years)</label>
          <input
            className="addUserInput"
            name="age"
            type="number"
            ref={ageInputRef}
            // onChange={inputHandler}
            // value={user.age}
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
