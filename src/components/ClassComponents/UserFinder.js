import { Component } from "react";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

import styles from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  state = {
    filteredUsers: [],
    searchQuerry: "",
  };

  componentDidMount() {
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuerry } = this.state;

    if (prevState.searchQuerry !== this.state.searchQuerry)
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.toLowerCase().includes(searchQuerry.toLowerCase())
        ),
      });
  }

  searchChangeHandler = (e) => {
    this.setState({ searchQuerry: e.target.value });
  };

  render() {
    const { filteredUsers } = this.state;
    return (
      <div className={styles.finder}>
        <ErrorBoundary>
          <input type="search" onChange={(e) => this.searchChangeHandler(e)} />
          <Users users={filteredUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default UserFinder;
