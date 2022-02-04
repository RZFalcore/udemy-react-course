import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./store/authContext";

const RequiredAuth = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";

// import AuthContext from "./store/authContext";

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? children : <Navigate to="/auth" />;
// };

// export default ProtectedRoute;
