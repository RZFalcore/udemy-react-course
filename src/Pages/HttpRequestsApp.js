import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "../components/HttpRequests/AddMovie";
import MoviesList from "../components/HttpRequests/MoviesList";
import styles from "./HttpRequestApp.module.css";

const HttpRequestsApp = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

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
      setError(e.message);
      console.log(e);
    }
  }, []);

  const addMovieHandler = (movie) => console.log(movie);

  useEffect(() => fetchMoviesHandler(), [fetchMoviesHandler]);

  let output;
  if (!isLoading && movies.length > 0) output = <MoviesList movies={movies} />;
  if (!isLoading && movies.length === 0) output = <p>No movies founded.</p>;
  if (isLoading) output = <p>Loading...</p>;
  if (error)
    output = (
      <>
        <h2>Some error occures...</h2>
        <p>{error}</p>
      </>
    );

  return (
    <React.Fragment>
      <section className={styles.section}>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className={styles.section}>
        <button className={styles.button} onClick={fetchMoviesHandler}>
          Fetch Movies
        </button>
      </section>
      <section className={styles.section}>{output}</section>
    </React.Fragment>
  );
};

export default HttpRequestsApp;
