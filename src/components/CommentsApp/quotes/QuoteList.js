import React from "react";
import { useHistory, useLocation } from "react-router";
import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "des" : "asc"}`,
    });
    // history.push(
    //   `${location.pathname}?sort=${isSortingAscending ? "des" : "asc"}`
    // );
  };

  return (
    <>
      <div className={styles.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "descending" : "ascending"}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};;

export default QuoteList;
