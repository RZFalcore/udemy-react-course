import React, { useContext } from "react";
import MeetupsList from "../components/meetups/MeetupsList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const favoritesCts = useContext(FavoritesContext);
  return (
    <section>
      <h1>My favorites</h1>
      {favoritesCts.totalFavorites ? (
        <MeetupsList meetups={favoritesCts.favorites} />
      ) : (
        <p>No favorites meetups yet. Try to add some!</p>
      )}
    </section>
  );
};

export default Favorites;
