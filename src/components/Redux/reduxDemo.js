const redux = require("redux");

const defaultStore = { counter: 0 };

const incReducer = (store = defaultStore, action) => {
  return {
    counter: store.counter + 1,
  };
};

const store = redux.createStore(incReducer);

const counterSubscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "INCREMENT" });
