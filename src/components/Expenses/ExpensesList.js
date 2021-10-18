import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ list }) => {
  if (list.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;

  return (
    <ul className="expenses-list">
      {list.length &&
        list.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
    </ul>
  );
};

export default ExpensesList;
