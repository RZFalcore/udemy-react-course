import React, { useReducer, useCallback, useMemo, useEffect } from "react";

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
  const { isLoading, error, data, delId, identifier, sendRequest, clear } =
    useHttp();

  useEffect(() => {
    if (!isLoading && !error && identifier === "REMOVE_INGR")
      ingredientsDispatch({ type: "DELETE", id: delId });
    else if (!isLoading && !error && identifier === "ADD_INGR")
      ingredientsDispatch({
        type: "ADD",
        ingredient: { id: data.name, ...delId },
      });
  }, [data, delId, identifier, isLoading, error]);

  const submitHandler = useCallback(
    (newIngredient) => {
      sendRequest(
        "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json",
        "POST",
        JSON.stringify(newIngredient),
        newIngredient,
        "ADD_INGR"
      );
    },
    [sendRequest]
  );

  const deleteHandler = useCallback(
    (id) => {
      sendRequest(
        `https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients/${id}.jon`,
        "DELETE",
        null,
        id,
        "REMOVE_INGR"
      );
    },
    [sendRequest]
  );

  const filteredIngredientsHanlder = useCallback((filteredIngr) => {
    ingredientsDispatch({ type: "SET", ingredients: filteredIngr });
  }, []);

  const ingridientsList = useMemo(() => {
    return (
      <IngidientList ingredients={ingredients} onRemoveItem={deleteHandler} />
    );
  }, [ingredients, deleteHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm onSubmit={submitHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHanlder} />
        {ingridientsList}
      </section>
    </div>
  );
}

export default Ingredients;
