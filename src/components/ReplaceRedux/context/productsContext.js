import React, { useState } from "react";

const defaultProducts = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];


export const ProductsContext = React.createContext({
  products: [],
  toggleFavorite: (id) => {},
});

export default (props) => {
  const [productsList, setProductsList] = useState(defaultProducts);

  const toggleFavorite = (id) => {
    setProductsList((current) =>
      current.map((prod) => {
        if (prod.id === id) return { ...prod, isFavorite: !prod.isFavorite };
        else return prod;
      })
    );
    console.log("productsList", productsList);
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
