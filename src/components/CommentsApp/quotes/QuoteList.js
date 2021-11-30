import React from "react";
import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";

const QuoteList = (props) => {
  return (
    <>
      <ul className={styles.list}>
        {props.quotes.map((quote) => (
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
};

export default QuoteList;
