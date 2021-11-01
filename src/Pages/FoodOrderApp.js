import React, { useState } from "react";
import Cart from "../components/FoodOrderProject/Cart/Cart";
import Header from "../components/FoodOrderProject/Layout/Header";
import Meals from "../components/FoodOrderProject/Meals/Meals";

const FoodOrderApp = () => {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  const openCart = () => {
    setCartModalIsOpen(true);
  };

  const closeCart = () => {
    setCartModalIsOpen(false);
  };

  return (
    <>
      <Header openModal={openCart} />
      {cartModalIsOpen && <Cart closeModal={closeCart} />}
      <main>
        <Meals />
      </main>
    </>
  );
};

export default FoodOrderApp;
