import React from "react";
import ExpanseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  return (
    <div className="expense-item">
      <ExpanseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">$ {amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
