import React, { useState, useEffect, useRef } from "react";

import ErrorModal from "../UI/ErrorModal";
import useHttp from "../hooks/http";
import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(({ onLoadIngredients, setLoading }) => {
  const [filter, setFilter] = useState("");
  const inputRef = useRef();
  const { isLoading, error, data, sendRequest, clear } = useHttp();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (filter === inputRef.current.value) {
        const querry =
          filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;

        sendRequest(
          "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json" +
            querry
        );
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [filter, inputRef, sendRequest]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const ingredientsList = [];
      for (const k in data) {
        ingredientsList.push({
          id: k,
          title: data[k].title,
          amount: data[k].amount,
        });
      }
      onLoadIngredients(ingredientsList);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  const changeFilterHandler = (e) => setFilter(e.target.value);
  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
          <input
            type="text"
            ref={inputRef}
            value={filter}
            onChange={changeFilterHandler}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
