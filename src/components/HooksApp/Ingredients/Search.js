import React, { useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(({ onLoadIngridients }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const querry =
      filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;

    fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/ingridients.json" +
        querry
    )
      .then((res) => res.json())
      .then((data) => {
        const ingridientsList = [];
        for (const k in data) {
          ingridientsList.push({
            id: k,
            title: data[k].title,
            amount: data[k].amount,
          });
        }
        onLoadIngridients(ingridientsList);
      })
      .catch((e) => console.log(e));
  }, [filter, onLoadIngridients]);

  const changeFilterHandler = (e) => setFilter(e.target.value);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={filter} onChange={changeFilterHandler} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
