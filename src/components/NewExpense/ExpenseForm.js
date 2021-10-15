import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({ title: "", amount: "", date: "" });

  const inputChangeHandler = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={expense.amount}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2021-01-01"
            max="2031-01-01"
            value={expense.date}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expence</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
