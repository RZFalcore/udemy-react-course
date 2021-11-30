import React from "react";
import QuoteList from "../quotes/QuoteList";

const DUMMY_DATA = [
  { id: "1", author: "Harry", text: "Hello there!" },
  { id: "2", author: "Endy", text: "General Kenoby!" },
];

const QuotesPage = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default QuotesPage;
