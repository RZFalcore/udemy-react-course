import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
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
        {filteredExpenses.length ? (
          filteredExpenses.map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          ))
        ) : (
          <h2 style={{ color: "white", textAlign: "center" }}>
            No expenses found!
          </h2>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
