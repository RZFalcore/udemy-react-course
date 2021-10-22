import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser/AddUser";
import UserList from "./components/AddUser/UserList/UserList";
import Modal from "./components/AddUser/Modal/Modal";
import Wrapper from "./components/AddUser/Helpers/Wrapper";

const AddUserApp = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState();

  const addUserHandler = (newUser) => {
    setUserList((prevState) => [...prevState, newUser]);
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          closeModal={closeModalHandler}
        />
      )}
      <AddUser addUser={addUserHandler} setError={setError} />
      {userList.length > 0 && <UserList users={userList} />}
    </Wrapper>
  );
};

export default AddUserApp;
