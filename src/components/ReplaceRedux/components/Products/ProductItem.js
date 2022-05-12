import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";

import Card from "../UI/Card";
import "./ProductItem.css";

// import { useDispatch } from 'react-redux';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = (props) => {
  const toggle = useContext(ProductsContext).toggleFavorite;

  // const dispatch = useDispatch();

  const toggleFavHandler = () => {
    toggle(props.id);
    // dispatch(toggleFav(props.id));
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;