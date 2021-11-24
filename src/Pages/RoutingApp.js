import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navigation from "../components/RoutingApp/Navigation";
import ProductDetails from "../components/RoutingApp/Pages/ProductDetails";
import ProductsPage from "../components/RoutingApp/Pages/ProductsPage";
import WelcomePage from "../components/RoutingApp/Pages/WelcomePage";

import "./RoutingApp.css";

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <WelcomePage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
