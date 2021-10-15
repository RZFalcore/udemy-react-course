import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ addExpense }) => (
  <div className="new-expense">
    <ExpenseForm addExpense={addExpense} />
  </div>
);

export default NewExpense;
