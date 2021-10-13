import React from "react";
import "./Card.css";

const Cart = ({ children, className }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Cart;
