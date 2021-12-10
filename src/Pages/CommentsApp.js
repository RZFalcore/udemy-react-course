import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "../components/CommentsApp/layout/Layout";
import LoadingSpinner from "../components/CommentsApp/UI/LoadingSpinner";
import "./CommentsApp.css";

const CommentsPage = lazy(() =>
  import("../components/CommentsApp/pages/CommentsPage")
);
const NewQuotePage = lazy(() =>
  import("../components/CommentsApp/pages/NewQuotePage")
);
const QuoteDetailsPage = lazy(() =>
  import("../components/CommentsApp/pages/QuoteDetailsPage")
);
const QuotesPage = lazy(() =>
  import("../components/CommentsApp/pages/QuotesPage")
);
const NotFound = lazy(() => import("../components/CommentsApp/pages/NotFound"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/quotes" replace />} />
            <Route path="/quotes/:quoteId" element={<QuoteDetailsPage />} />
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/new-quote" element={<NewQuotePage />} />
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
