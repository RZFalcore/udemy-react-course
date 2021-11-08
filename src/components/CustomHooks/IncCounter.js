import React from "react";
import Card from "./Card";
import useCounter from "./hooks/useCounter";

const IncCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default IncCounter;
