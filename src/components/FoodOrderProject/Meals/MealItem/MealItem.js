import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cartContent";
import styles from "./MealItem.module.css";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandeler = (amount) => {
    cartCtx.addItem({ id, name, amount, price });
  };

  console.log("meal item", id, name, description, price);
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
        <MealItemForm id={id} onAddToCart={addToCartHandeler} />
      </div>
    </li>
  );
};

export default MealItem;
