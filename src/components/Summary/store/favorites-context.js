import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (newEntry) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (newEntry) =>
    setUserFavorites((favorites) => favorites.concat(newEntry));

  const removeFavoriteHandler = (id) =>
    setUserFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  const isFavoriteHandler = (id) => {
    userFavorites.some((favorite) => favorite.id === id);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
