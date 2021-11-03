import React, { useState } from "react";
import Cart from "../components/FoodOrderProject/Cart/Cart";
import Header from "../components/FoodOrderProject/Layout/Header";
import Meals from "../components/FoodOrderProject/Meals/Meals";
import CartProvider from "../components/FoodOrderProject/store/CartProvider";

const FoodOrderApp = () => {
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

  const openCart = () => {
    setCartModalIsOpen(true);
  };

  const closeCart = (e) => {
    setCartModalIsOpen(false);
  };

  return (
    <CartProvider>
      <Header onOpenModal={openCart} />
      {cartModalIsOpen && <Cart onCloseModal={closeCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default FoodOrderApp;
