import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(({ onLoadIngridients, setLoading }) => {
  const [filter, setFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (filter === inputRef.current.value) {
        const querry =
          filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;
        setLoading(true);
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
            setLoading(false);
            onLoadIngridients(ingridientsList);
          })
          .catch((e) => console.log(e));
      }
    }, 300);
    return () => clearTimeout(delay);
  }, [filter, onLoadIngridients, setLoading]);

  const changeFilterHandler = (e) => setFilter(e.target.value);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
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
