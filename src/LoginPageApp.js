import React, { useState, useEffect } from "react";

import Login from "./components/LoginPageProject/Login/Login";
import Home from "./components/LoginPageProject/Home/Home";
import MainHeader from "./components/LoginPageProject/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged) setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogged", true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLogged", false);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
