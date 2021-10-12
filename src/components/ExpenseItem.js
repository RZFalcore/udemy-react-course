import React from "react";
import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <p>April 12 2020</p>
      <div className="expense-item__description">
        <h2>Subscription</h2>
        <p className="expense-item__price">$ 257.50</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
