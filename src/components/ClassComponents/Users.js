// import React, { useState } from "react";
import React, { Component } from "react";
import User from "./User";

import styles from "./Users.module.css";


class Users extends Component {
  state = {
    showUsers: true,
  };

  componentDidUpdate() {
    if (this.props.users.length === 0) throw new Error("No names match!");
  }

  toggleUsersHandler = () => {
    this.setState((prevState) => ({ showUsers: !prevState.showUsers }));
  };

  render() {
    const { showUsers } = this.state;

    console.log("USERS PROPS:", this.props);
    return (
      <div className={styles.users}>
        <button onClick={() => this.toggleUsersHandler()}>
          {showUsers ? "Hide" : "Show"} Users
        </button>
        {showUsers && (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} name={user.name} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Users;
