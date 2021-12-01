import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const DUMMY_DATA = [
  { id: "1", author: "Harry", text: "Hello there!" },
  { id: "2", author: "Endy", text: "General Kenoby!" },
];

const QuoteDetailsPage = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_DATA.find((quote) => quote.id === quoteId);

  if (!quote) return <p>Nothing found there...</p>;

  return (
    <>
      <HighlightedQuote {...quote} />
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
