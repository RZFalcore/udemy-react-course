import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "../components/AuthProject/Layout/Layout";
import UserProfile from "../components/AuthProject/Profile/UserProfile";
import AuthPage from "../components/AuthProject/pages/AuthPage";
import HomePage from "../components/AuthProject/pages/HomePage";
import "./AuthApp.css";
import AuthContext, {
  AuthContxProvider,
} from "../components/AuthProject/store/authContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <AuthContxProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContxProvider>
  );
}

export default App;
