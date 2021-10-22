import React from "react";
import UserItem from "../UserItem/UserItem";
import "./UserList.css";

const UserList = ({ users }) => (
  <div className="userListWrapper">
    <ul className="userList">
      {users.map(({ id, user, age }) => (
        <UserItem key={id} user={user} age={age} />
      ))}
    </ul>
  </div>
);

export default UserList;
