import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2031-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expence</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
