import React from "react";
import { useHistory } from "react-router";
import QuoteForm from "../quotes/QuoteForm";

const NewQuotePage = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotePage;
