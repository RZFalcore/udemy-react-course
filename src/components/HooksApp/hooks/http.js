import { useReducer, useCallback } from "react";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { isLoading: true, error: null, data: null };
    case "RESPONSE":
      return { ...state, isLoading: false, data: action.resData };
    case "CLEAR":
      return { ...state, error: null };
    case "ERROR":
      return { isLoading: false, error: action.error };
    default:
      throw new Error("Something go wrong!");
  }
};

const useHttp = () => {
  const [http, httpDispatch] = useReducer(httpReducer, {
    isLoading: false,
    error: null,
    data: null,
  });

  const sendRequest = useCallback((url, method, body) => {
    httpDispatch("SEND");
    fetch(url, {
      method: method,
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((resData) => {
        httpDispatch("RESPONSE", resData);
      })
      .catch((e) => httpDispatch("ERROR", { error: e.message }));
  }, []);
  return { ...http, sendRequest: sendRequest };
};

export default useHttp;
