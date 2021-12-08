import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const WelcomePage = () => (
  <section>
    <h1>Welcome Page</h1>
    <Link to="new-user">New User</Link>
    <Routes>
      <Route path="/new-user" element={<h2>Hello there, userName!</h2>} />
    </Routes>
  </section>
);

export default WelcomePage;
