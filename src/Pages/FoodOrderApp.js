import React from "react";
import Header from "../components/FoodOrderProject/Layout/Header";
import Meals from "../components/FoodOrderProject/Meals/Meals";

const FoodOrderApp = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default FoodOrderApp;
