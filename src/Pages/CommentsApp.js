import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CommentsPage from "../components/CommentsApp/pages/CommentsPage";
import NewQuotePage from "../components/CommentsApp/pages/NewQuotePage";
import QuoteDetailsPage from "../components/CommentsApp/pages/QuoteDetailsPage";
import QuotesPage from "../components/CommentsApp/pages/QuotesPage";

import "./CommentsApp.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/quotes" exact>
          <QuotesPage />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetailsPage />
        </Route>
        <Route path="/new-quote">
          <NewQuotePage />
        </Route>
        <Route path="/comments">
          <CommentsPage />
        </Route>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
