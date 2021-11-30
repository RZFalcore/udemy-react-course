import React from "react";
import { Route, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const QuoteDetailsPage = () => {
  const { quoteId } = useParams();

  const DUMMY_DATA = [
    { id: "1", author: "Harry", text: "Hello there!" },
    { id: "2", author: "Endy", text: "General Kenoby!" },
  ];

  const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);

  if (!quote) return <p>Nothing found there...</p>;

  return (
    <>
      <HighlightedQuote {...quote} />
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetailsPage;
