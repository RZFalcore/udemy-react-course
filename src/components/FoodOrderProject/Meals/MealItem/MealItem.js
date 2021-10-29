import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          <p className={styles.description}>{description}</p>
        </div>
        <div>
          <p className={styles.price}>{formattedPrice}</p>
        </div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
