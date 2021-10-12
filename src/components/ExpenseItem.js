import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">$ {amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
