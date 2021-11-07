import React, { useState } from "react";
import MoviesList from "../components/HttpRequests/MoviesList";
import styles from "./HttpRequestApp.module.css";

const HttpRequestsApp = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const transformedData = data.results.map((data) => {
        return {
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          realeseDate: data.realese_date,
        };
      });
      setMovies(transformedData);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <section className={styles.section}>
        <button className={styles.button} onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section className={styles.section}>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies founded.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
};

export default HttpRequestsApp;
