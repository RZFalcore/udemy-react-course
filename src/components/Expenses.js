import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => (
  <Card className="expenses">
    {expenses.map(({ id, title, amount, date }) => (
      <ExpenseItem key={id} title={title} amount={amount} date={date} />
    ))}
  </Card>
);

export default Expenses;
