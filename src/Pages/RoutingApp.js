import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome/*" element={<WelcomePage />}>
            <Route path="new-user" element={<h2>Hello there, userName!</h2>} />
          </Route>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
