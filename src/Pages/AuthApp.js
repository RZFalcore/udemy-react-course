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
import RequiredAuth from "../components/AuthProject/RequiredAuth";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AuthContxProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<RequiredAuth />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<UserProfile />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContxProvider>
  );
}

export default App;
