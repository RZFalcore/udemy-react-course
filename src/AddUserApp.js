import React, { useState } from "react";
import AddUser from "./components/AddUserProject/AddUser/AddUser";
import UserList from "./components/AddUserProject/UserList/UserList";
import Modal from "./components/AddUserProject/Modal/Modal";
import Wrapper from "./components/AddUserProject/Helpers/Wrapper";

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
