import React from "react";

import MoviesList from "../components/HttpRequests/MoviesList";
import styles from "./HttpRequestApp.module.css";

const dummyMovies = [
  {
    id: 1,
    title: "Some Dummy Movie",
    openingText: "This is the opening text of the movie",
    releaseDate: "2021-05-18",
  },
  {
    id: 2,
    title: "Some Dummy Movie 2",
    openingText: "This is the second opening text of the movie",
    releaseDate: "2021-05-19",
  },
];

const HttpRequestsApp = () => {
  return (
    <React.Fragment>
      <section className={styles.section}>
        <button className={styles.button}>Fetch Movies</button>
      </section>
      <section className={styles.section}>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
};
  

export default HttpRequestsApp;
