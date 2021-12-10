import React, { useEffect } from "react";
import { Link, Routes, Route, useParams, useMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetailsPage = () => {
  const { quoteId } = useParams();
  const match = useMatch();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => sendRequest(quoteId), [sendRequest, quoteId]);

  if (status === "pending")
    <div className="centered">
      <LoadingSpinner />
    </div>;

  if (error) <p className="centered">{error}</p>;

  if (!loadedQuote) return <p>Nothing found there...</p>;

  return (
    <>
      {loadedQuote && <HighlightedQuote {...loadedQuote} />}
      <Routes>
        <Route
          path={`${match.path}`}
          element={
            <div className="centered">
              <Link to={`${match.url}/comments`} className="btn">
                Show Comments
              </Link>
            </div>
          }
        />
        <Route path={`${match.path}/comments`} element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetailsPage;
