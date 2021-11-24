import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductsPage from "../components/RoutingApp/Pages/ProductsPage";
import WelcomePage from "../components/RoutingApp/Pages/WelcomePage";

import "./RoutingApp.css";

function App() {
  return (
    <Router>
      <div>
        <h2>Let's get started!</h2>
      </div>
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
    </Router>
  );
}

export default App;
