import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState("2021");
  const filteredExpenses = expenses.filter(
    ({ date }) => date.getFullYear() === parseInt(filter, 10)
  );
  return (
    <div>
      <ExpensesFilter selectedFilter={filter} setFilter={setFilter} />
      <Card className="expenses">
        <ExpensesList list={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
