import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
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
        <Routes>
          {/* <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route> */}
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
