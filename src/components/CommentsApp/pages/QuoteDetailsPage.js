import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetailsPage = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => sendRequest(quoteId), [sendRequest]);

  if (status === "pending")
    <div className="centered">
      <LoadingSpinner />
    </div>;

  if (error) <p className="centered">{error}</p>;

  if (!loadedQuote.text) return <p>Nothing found there...</p>;

  return (
    <>
      <HighlightedQuote {...loadedQuote} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn">
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetailsPage;
