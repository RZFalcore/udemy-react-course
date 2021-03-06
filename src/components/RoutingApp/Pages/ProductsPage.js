import React from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

const ProductsPage = () => {
  // const navigate = useNavigate();
  // navigate("/products/")
  // navigate(-1)
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default ProductsPage;
