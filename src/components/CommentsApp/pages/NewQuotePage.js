import React from "react";
import QuoteForm from "../quotes/QuoteForm";

const NewQuotePage = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotePage;
