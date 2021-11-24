import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/welcome">Welcome Page</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products Page</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
