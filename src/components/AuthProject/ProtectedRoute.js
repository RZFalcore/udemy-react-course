import { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "./store/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default ProtectedRoute;
