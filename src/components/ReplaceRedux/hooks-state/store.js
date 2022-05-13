import React, { useState, useEffect } from "react";

const globalState = {};
const listeners = [];
const actions = {};

const useStore = () => {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => listeners.filter((listener) => listener !== setState);
  }, [setState]);
};
