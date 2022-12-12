import React from "react";
import { Link } from "react-router-dom";

import { header, logo, list, listItem } from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={header}>
      <div className={logo}>
        <Link to={"/"}>Meetup Base</Link>
      </div>
      <nav>
        <ul className={list}>
          <li className={listItem}>
            <Link to={"/"}>Meetups</Link>
          </li>
          <li className={listItem}>
            <Link to={"/new-meetup"}>Add new meetup</Link>
          </li>
          <li className={listItem}>
            <Link to={"/favorites"}>Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
