// import React, { useState } from "react";
import React, { Component } from "react";
import User from "./User";

import styles from "./Users.module.css";


class Users extends Component {
  state = {
    showUsers: true,
  };

  toggleUsersHandler = () => {
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
  };

  render() {
    const { showUsers } = this.state;

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={styles.users}>
        <button onClick={() => this.toggleUsersHandler()}>
          {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && usersList}
      </div>
    );
  }
}

export default Users;
