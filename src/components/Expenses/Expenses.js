import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState("2021");
  console.log(filter);
  return (
    <div>
      <ExpensesFilter selectedFilter={filter} setFilter={setFilter} />
      <Card className="expenses">
        {expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
