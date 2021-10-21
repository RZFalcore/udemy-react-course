import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser/AddUser";
import UserList from "./components/AddUser/UserList/UserList";

const AddUserApp = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newUser) => {
    newUser.id = Math.random() * 1000;
    setUserList((prevState) => [...prevState, newUser]);
  };

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      {userList.length && <UserList users={userList} />}
    </div>
  );
};

export default AddUserApp;
