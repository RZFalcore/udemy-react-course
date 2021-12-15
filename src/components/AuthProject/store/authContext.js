import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContxProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const userLoggedIn = !!token;

  const loginHandler = (token) => setToken(token);

  const logoutHandler = () => setToken(null);

  const contextValue = {
    token,
    isAuthenticated: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
