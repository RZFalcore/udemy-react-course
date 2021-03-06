import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/authContext";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/auth");
  };

  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isAuthenticated && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
