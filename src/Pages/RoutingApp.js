import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../components/RoutingApp/Navigation";
import ProductDetails from "../components/RoutingApp/Pages/ProductDetails";
import ProductsPage from "../components/RoutingApp/Pages/ProductsPage";
import WelcomePage from "../components/RoutingApp/Pages/WelcomePage";

import "./RoutingApp.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/welcome">
        <WelcomePage />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
    </Router>
  );
}

export default App;
