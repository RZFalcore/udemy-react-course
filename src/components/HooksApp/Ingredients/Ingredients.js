import React, { useReducer, useCallback, useMemo } from "react";

import IngidientList from "./IngredientList";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../hooks/http";

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

function Ingredients() {
  const [ingredients, ingredientsDispatch] = useReducer(ingredientsReducer, []);
  const { isLoading, error, data, sendRequest } = useHttp();

  const submitHandler = useCallback((newIngredient) => {
    // httpDispatch("SEND");
    // fetch(
    //   "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(newIngredient),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     return ingredientsDispatch({
    //       type: "ADD",
    //       ingredient: { id: data.name, ...newIngredient },
    //     });
    //   })
    //   .catch((e) => httpDispatch("ERROR", { error: e.message }));
    // httpDispatch("RESPONSE");
  }, []);

  const deleteHandler = useCallback(
    (id) => {
      sendRequest(
        `https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients/${id}.json`,
        "DELETE"
      );
      // httpDispatch("SEND");
    },
    [sendRequest]
  );

  const filteredIngredientsHanlder = useCallback((filteredIngr) => {
    ingredientsDispatch({ type: "SET", ingredients: filteredIngr });
  }, []);

  const clearErrorHandler = useCallback(() => {
    // httpDispatch("CLEAR");
  }, []);

  const ingridientsList = useMemo(() => {
    return (
      <IngidientList ingredients={ingredients} onRemoveItem={deleteHandler} />
    );
  }, [ingredients, deleteHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearErrorHandler}>{error}</ErrorModal>}
      <IngredientForm onSubmit={submitHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHanlder} />
        {ingridientsList}
      </section>
    </div>
  );
}

export default Ingredients;
