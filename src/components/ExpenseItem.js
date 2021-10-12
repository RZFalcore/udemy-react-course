import React from "react";
import ExpanseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <ExpanseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">$ {amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
