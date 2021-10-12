import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div>
      <p>{month}</p>
      <p>{year}</p>
      <p>{day}</p>
    </div>
  );
};

export default ExpenseDate;
