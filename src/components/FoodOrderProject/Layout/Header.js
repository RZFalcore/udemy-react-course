import React from "react";
import HeaderButton from "../UI/HeaderButton";
import styles from "./Header.module.css";

const Header = ({ onOpenModal }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>MealsOrder</h1>
        <HeaderButton onOpenModal={onOpenModal} />
      </header>
      <div className={styles.mainImage}>
        <img
          src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
          alt="Meals"
        />
      </div>
    </>
  );
};

export default Header;
