import React, { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
// import { useSelector } from 'react-redux';

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const productsList = useContext(ProductsContext).products;
  // const productList = useSelector(state => state.shop.products);

  return (
    <ul className="products-list">
      {productsList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
