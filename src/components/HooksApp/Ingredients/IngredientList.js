import React from 'react';

import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientList.css";

const IngredientList = ({ ingredients, onRemoveItem, loading }) => {
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <ul>
          {ingredients.map((ig) => (
            <li key={ig.id} onClick={onRemoveItem.bind(this, ig.id)}>
              <span>{ig.title}</span>
              <span>{ig.amount}x</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default IngredientList;
