import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/welcome">
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
