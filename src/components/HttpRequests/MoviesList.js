import React from "react";

import Movie from "./Movie";
import styles from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <ul className={styles.moviesList}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
