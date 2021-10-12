import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <p>{date}</p>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">$ {amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
