import React from "react";
import { Routes, Route } from "react-router-dom";

const WelcomePage = () => (
  <section>
    <h1>Welcome Page</h1>
    <Routes>
      <Route
        path="/welcome/new-user"
        element={() => <h2>Hello there, userName!</h2>}
      />
    </Routes>
  </section>
);

export default WelcomePage;
