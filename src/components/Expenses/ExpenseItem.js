import React, { useState } from "react";
import ExpanseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const [newTitle, setNewTitle] = useState(title);

  const clickHandler = () => setNewTitle("Updated!");

  return (
    <Card className="expense-item">
      <ExpanseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <p className="expense-item__price">$ {amount}</p>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
