const redux = require("redux");

const defaultStore = { counter: 0 };

const incReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: store.counter + 1,
      };

    case "DECREMENT":
      return { counter: store.counter - 1 };

    default:
      return store;
  }
};

const store = redux.createStore(incReducer);

const counterSubscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
