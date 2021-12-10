import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quick Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
