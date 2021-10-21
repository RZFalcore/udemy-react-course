import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser/AddUser";
import UserList from "./components/AddUser/UserList/UserList";
import Modal from "./components/AddUser/Modal/Modal";

const AddUserApp = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState();

  const addUserHandler = (newUser) => {
    newUser.id = Math.random() * 1000;
    setUserList((prevState) => [...prevState, newUser]);
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          closeModal={closeModalHandler}
        />
      )}
      <AddUser addUser={addUserHandler} setError={setError} />
      {userList.length && <UserList users={userList} />}
    </div>
  );
};

export default AddUserApp;
