import React from "react";
import Card from "./Card";
import useCounter from "./hooks/useCounter";

const DecCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default DecCounter;
