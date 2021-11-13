import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const response = await fetch(
      "https://ud-react-http-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );
    const data = await response.json();
    const formatedData = [];
    for (const key in data) {
      formatedData.push({ id: key, ...data[key] });
    }
    setMeals(formatedData);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
