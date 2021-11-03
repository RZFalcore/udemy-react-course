import React, { useReducer } from "react";
import CartContext from "./cartContent";

const defautlCart = { items: [], totalAmount: 0 };

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, payload],
        totalAmount: state.totalAmount + payload.price * payload.amount,
      };
    case "REMOVE_ITEM":
      return { ...state };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defautlCart);

  const addCartItemHandeler = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeCartItemHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const cartContext = {
    ...cartState,
    addItem: addCartItemHandeler,
    removeItem: removeCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
