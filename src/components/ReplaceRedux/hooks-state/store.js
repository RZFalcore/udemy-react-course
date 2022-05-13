import React, { useState, useEffect } from "react";

const globalState = {};
const listeners = [];
const actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionId) => {
    const newState = actions[actionId](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) listener(globalState);
  };

  useEffect(() => {
    listeners.push(setState);

    return () => listeners.filter((listener) => listener !== setState);
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) globalState = { ...globalState, ...initialState };
  actions = { ...actions, ...userActions };
};