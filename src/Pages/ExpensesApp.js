import React, { useState } from "react";
import Expenses from "../components/ExpensesProject/Expenses/Expenses";
import NewExpence from "../components/ExpensesProject/NewExpense/NewExpense";

const defaultExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses);

  const addExpenseHandler = (newExpense) => {
    newExpense.id = Date.now();
    setExpenses((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpence addExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
