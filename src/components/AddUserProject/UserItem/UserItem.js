import React from "react";
import "./UserItem.css";

const UserItem = ({ user, age }) => {
  return (
    <li className="userItem">
      <p>{`${user} (${age} years old)`}</p>
    </li>
  );
};

export default UserItem;
