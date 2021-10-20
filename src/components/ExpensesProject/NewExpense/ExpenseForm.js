import React, { useState } from "react";

import "./ExpenseForm.css";


const ExpenseForm = ({ addExpense, hideForm }) => {
  const [expense, setExpense] = useState({ title: "", amount: "", date: "" });

  const inputChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: expense.title,
      amount: +expense.amount,
      date: new Date(expense.date),
    };
    addExpense(newExpense);
    setExpense({ title: "", amount: "", date: "" });
    hideForm();
  };

  return (
    <form onSubmit={submitHandler}>
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
        <button type="button" onClick={hideForm}>
          Cancel
        </button>
        <button type="submit">Add expence</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
