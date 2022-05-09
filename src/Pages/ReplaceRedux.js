import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import App from "../components/ReplaceRedux/App";
import productReducer from "../components/ReplaceRedux/store/reducers/products";

const rootReducer = combineReducers({
  shop: productReducer,
});

const store = createStore(rootReducer);

const ReplaceReduxApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default ReplaceReduxApp;
