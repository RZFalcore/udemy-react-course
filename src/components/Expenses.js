import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = ({ expenses }) => (
  <div className="expenses">
    {expenses.map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ))}
  </div>
);

export default Expenses;
