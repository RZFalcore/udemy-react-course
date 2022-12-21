import React, { useContext } from "react";
import Card from "../ui/Card";

import FavoritesContext from "../../store/favorites-context";

import styles from "./MeetupsLIstItem.module.css";

const MeetupsListItem = ({ id, image, title, address, description }) => {
  const favoritesCtx = useContext(FavoritesContext);

  const meetupIsFavorite = favoritesCtx.isFavorite(id);
  
  const toggleFavoriteHandler = () => {
    console.log(meetupIsFavorite);
    if (meetupIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({ id, image, title, address, description });
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteHandler}>
            {meetupIsFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupsListItem;
