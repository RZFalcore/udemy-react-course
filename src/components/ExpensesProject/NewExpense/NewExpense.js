import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const formVisibilityHandler = () => {
    setIsFormVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className="new-expense">
      {isFormVisible ? (
        <ExpenseForm addExpense={addExpense} hideForm={formVisibilityHandler} />
      ) : (
        <button onClick={formVisibilityHandler}>Add expense</button>
      )}
    </div>
  );
};

export default NewExpense;
