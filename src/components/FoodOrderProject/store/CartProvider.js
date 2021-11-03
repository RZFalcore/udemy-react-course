import React, { useReducer } from "react";
import CartContext from "./cartContent";

const defautlCart = { items: [], totalAmount: 0 };

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ITEM":
      const updatedCart = {
        items: [...state.items],
        totalAmount: state.totalAmount + payload.price * payload.amount,
      };
      
      const isExisted = state.items.find((item) => item.id === payload.id);

      if (isExisted) {
        const itemIndex = state.items.indexOf(isExisted);
        updatedCart.items[itemIndex].amount += payload.amount;
      } else {
        updatedCart.items.push(payload);
      }
      return updatedCart;
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
