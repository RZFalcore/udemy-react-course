import React, { useState, useReducer, useCallback } from "react";

import IngidientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingridientsReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.ingridients;
    case "ADD":
      return [...state, action.ingridient];
    case "DELETE":
      return state.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Something go wrong!");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingridientsReducer, []);

  // const [ingredients, setIngridients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = (newIngridient) => {
    setIsLoading(true);
    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json",
      {
        method: "POST",
        body: JSON.stringify(newIngridient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        // setIngridients((prevState) => [
        //   ...prevState,
        //   { id: data.name, ...newIngridient },
        // ]);
        dispatch({
          type: "ADD",
          ingridient: { id: data.name, ...newIngridient },
        });
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  const deleteHandler = (id) => {
    setIsLoading(true);
    fetch(
      `https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients/${id}.json`,
      { method: "DELETE" }
    )
      .then((res) => {
        if (res.ok) {
          setIsLoading(false);
          // setIngridients((prevState) =>
          //   prevState.filter((ingridient) => ingridient.id !== id)
          // );
          dispatch({ type: "DELETE", id });
        }
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  const filteredIngridientsHanlder = useCallback((filteredIngr) => {
    dispatch({ type: "SET", ingridients: filteredIngr });
    // setIngridients(filteredIngr);
  }, []);

  const clearErrorHandler = () => {
    setError(null);
  };

  return (
    <div className="App">
      <IngredientForm onSubmit={submitHandler} loading={isLoading} />

      <section>
        <Search
          onLoadIngridients={filteredIngridientsHanlder}
          setLoading={setIsLoading}
        />
        <IngidientList
          ingredients={ingredients}
          onRemoveItem={deleteHandler}
          loading={isLoading}
        />
      </section>
      {error && <ErrorModal onClose={clearErrorHandler}>{error}</ErrorModal>}
    </div>
  );
}

export default Ingredients;
