import React, { useState } from "react";
import Cart from "../components/FoodOrderProject/Cart/Cart";
import Header from "../components/FoodOrderProject/Layout/Header";
import Meals from "../components/FoodOrderProject/Meals/Meals";

const FoodOrderApp = () => {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  const openCart = () => {
    setCartModalIsOpen(true);
  };

  const closeCart = (e) => {
    console.log(e.target);
    setCartModalIsOpen(false);
  };

  return (
    <>
      <Header onOpenModal={openCart} />
      {cartModalIsOpen && <Cart onCloseModal={closeCart} />}
      <main>
        <Meals />
      </main>
    </>
  );
};

export default FoodOrderApp;
