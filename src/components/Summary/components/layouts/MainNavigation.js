import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import {
  header,
  logo,
  list,
  listItem,
  badge,
} from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

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
            <Link to={"/favorites"}>
              Favorites
              <span className={badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
