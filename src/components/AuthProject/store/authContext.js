import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
});

const calcRemainigTime = (experationTime) => {
  const currentTime = new Date().getTime();
  const indicativeExprTime = new Date(experationTime).getTime();

  return indicativeExprTime - currentTime > 0 ? true : false;
};


const getToken = () => {
  const remainingTime =
    new Date(localStorage.getItem("expiredIn")).getTime() -
    new Date().getTime();
  return remainingTime && remainingTime > 0
    ? localStorage.getItem("token")
    : null;
};

export const AuthContxProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());

  const userLoggedIn = !!token;

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    if (calcRemainigTime(expirationTime)) {
      localStorage.setItem("token", token);
      localStorage.setItem("expiredIn", expirationTime);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiredIn");
  };

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
