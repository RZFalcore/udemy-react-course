import React, { useReducer, useCallback } from "react";

import IngidientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...state, action.ingredient];
    case "DELETE":
      return state.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Something go wrong!");
  }
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { isLoading: true, error: null };
    case "RESPONSE":
      return { ...state, isLoading: false };
    case "CLEAR":
      return { ...state, error: null };
    case "ERROR":
      return { isLoading: false, error: action.error };
    default:
      throw new Error("Something go wrong!");
  }
};

function Ingredients() {
  const [ingredients, ingredientsDispatch] = useReducer(ingredientsReducer, []);
  const [http, httpDispatch] = useReducer(httpReducer, {
    isLoading: false,
    error: null,
  });

  const submitHandler = (newIngredient) => {
    httpDispatch("SEND");
    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json",
      {
        method: "POST",
        body: JSON.stringify(newIngredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        httpDispatch("RESPONSE");
        ingredientsDispatch({
          type: "ADD",
          ingredient: { id: data.name, ...newIngredient },
        });
      })
      .catch((e) => httpDispatch("ERROR", { error: e.message }));
  };

  const deleteHandler = (id) => {
    httpDispatch("SEND");
    fetch(
      `https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients/${id}.json`,
      { method: "DELETE" }
    )
      .then((res) => {
        if (res.ok) {
          httpDispatch("RESPONSE");
          ingredientsDispatch({ type: "DELETE", id });
        }
      })
      .catch((e) => httpDispatch("ERROR", { error: e.message }));
  };

  const filteredIngredientsHanlder = useCallback((filteredIngr) => {
    ingredientsDispatch({ type: "SET", ingredients: filteredIngr });
  }, []);

  const clearErrorHandler = () => httpDispatch("CLEAR");

  return (
    <div className="App">
      <IngredientForm onSubmit={submitHandler} loading={http.isLoading} />

      <section>
        <Search
          onLoadIngredients={filteredIngredientsHanlder}
          // setLoading={httpDispatch}
        />
        <IngidientList
          ingredients={ingredients}
          onRemoveItem={deleteHandler}
          loading={http.isLoading}
        />
      </section>
      {http.error && (
        <ErrorModal onClose={clearErrorHandler}>{http.error}</ErrorModal>
      )}
    </div>
  );
}

export default Ingredients;
