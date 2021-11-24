import React from "react";
import { Route } from "react-router-dom";

const WelcomePage = () => (
  <section>
    <h1>Welcome Page</h1>
    <Route path="/welcome/new-user">
      <h2>Hello there, userName!</h2>
    </Route>
  </section>
);

export default WelcomePage;
