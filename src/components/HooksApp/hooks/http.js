import { useReducer, useCallback } from "react";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  delId: null,
  identifier: null,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        isLoading: true,
        error: null,
        data: null,
        delId: null,
        identifier: action.identifier,
      };
    case "RESPONSE":
      return {
        ...state,
        isLoading: false,
        data: action.resData,
        delId: action.id,
      };
    case "CLEAR":
      return initialState;
    case "ERROR":
      return { isLoading: false, error: action.error };
    default:
      throw new Error("Something go wrong!");
  }
};

const useHttp = () => {
  const [http, httpDispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback((url, method, body, id, identifier) => {
    httpDispatch({ type: "SEND", identifier });

    fetch(url, {
      method: method,
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((resData) => {
        httpDispatch({ type: "RESPONSE", resData, id });
      })
      .catch((e) => httpDispatch({ type: "ERROR", error: e.message }));
  }, []);

  const clear = useCallback(() => httpDispatch({ type: "CLEAR" }), []);

  return { ...http, sendRequest, clear };
};

export default useHttp;
