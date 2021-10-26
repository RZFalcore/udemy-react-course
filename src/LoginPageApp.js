import React, { useState, useEffect } from "react";

import Login from "./components/LoginPageProject/Login/Login";
import Home from "./components/LoginPageProject/Home/Home";
import MainHeader from "./components/LoginPageProject/MainHeader/MainHeader";
import AuthContext from "./components/LoginPageProject/store/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogged", "true");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLogged", "false");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
