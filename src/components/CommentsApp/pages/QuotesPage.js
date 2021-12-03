import React, { useEffect } from "react";
import QuoteList from "../quotes/QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const QuotesPage = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending")
    <div className="centered">
      <LoadingSpinner />
    </div>;

  if (error) <p className="centered focused">{error}</p>;

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0))
    <NoQuotesFound />;

  return <>{loadedQuotes && <QuoteList quotes={loadedQuotes} />}</>;
};

export default QuotesPage;
