import React, { useState, useEffect, useCallback } from "react";

import IngidientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngridients] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const ingridientsList = [];
  //       for (const k in data) {
  //         ingridientsList.push({
  //           id: k,
  //           title: data[k].title,
  //           amount: data[k].amount,
  //         });
  //       }
  //       setIngridients(ingridientsList);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  const submitHandler = (newIngridient) => {
    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json",
      {
        method: "POST",
        body: JSON.stringify(newIngridient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) =>
        setIngridients((prevState) => [
          ...prevState,
          { id: data.name, ...newIngridient },
        ])
      )
      .catch((e) => console.log(e));
  };

  const deleteHandler = (id) => {
    setIngridients((prevState) =>
      prevState.filter((ingridient) => ingridient.id !== id)
    );
  };

  const filteredIngridientsHanlder = useCallback((filteredIngr) => {
    setIngridients(filteredIngr);
  }, []);

  return (
    <div className="App">
      <IngredientForm onSubmit={submitHandler} />

      <section>
        <Search onLoadIngridients={filteredIngridientsHanlder} />
        <IngidientList ingredients={ingredients} onRemoveItem={deleteHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
