import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "../components/CommentsApp/layout/Layout";
import CommentsPage from "../components/CommentsApp/pages/CommentsPage";
import NewQuotePage from "../components/CommentsApp/pages/NewQuotePage";
import QuoteDetailsPage from "../components/CommentsApp/pages/QuoteDetailsPage";
import QuotesPage from "../components/CommentsApp/pages/QuotesPage";
import NotFound from "../components/CommentsApp/pages/NotFound";

import "./CommentsApp.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetailsPage />
          </Route>
          <Route path="/quotes" exact>
            <QuotesPage />
          </Route>
          <Route path="/new-quote">
            <NewQuotePage />
          </Route>
          <Route path="/comments">
            <CommentsPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
