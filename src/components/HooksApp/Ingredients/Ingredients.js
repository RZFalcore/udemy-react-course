import React, { useState } from "react";

import IngidientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngridients] = useState([]);

  const submitHandler = (newIngridient) => {
    setIngridients((prevState) => [...prevState, newIngridient]);
  };

  return (
    <div className="App">
      <IngredientForm onSubmit={submitHandler} />

      <section>
        <Search />
        <IngidientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
