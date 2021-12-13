import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/AuthProject/Layout/Layout";
import UserProfile from "../components/AuthProject/Profile/UserProfile";
import AuthPage from "../components/AuthProject/pages/AuthPage";
import HomePage from "../components/AuthProject/pages/HomePage";
import "./AuthApp.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
