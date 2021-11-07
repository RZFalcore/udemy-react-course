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

      const response = await fetch(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      );
      const data = await response.json();
      const transformedData = Object.entries(data).map(([id, value]) => {
        return {
          id: id,
          title: value.title,
          openingText: value.openingText,
          releaseDate: value.releaseDate,
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

  const addMovieHandler = async (movie) => {
    console.log(movie);
    try {
      const response = await fetch(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };

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
