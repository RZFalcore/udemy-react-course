import React from "react";
import { Route, useParams } from "react-router-dom";

// import QuoteDetail from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const QuoteDetailsPage = () => {
  const { quoteId } = useParams();
  return (
    <>
      <h1>Quote Details Page</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetailsPage;
