import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "../components/ReplaceRedux/App";
import configureStore from "../components/ReplaceRedux/hooks-state/products-store";
// import ProductsProvider from "../components/ReplaceRedux/context/productsContext";

//  Switched redux to context API

// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
// import productReducer from "../components/ReplaceRedux/store/reducers/products";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

configureStore();

const ReplaceReduxApp = () => (
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </ProductsProvider>

  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>
);

export default ReplaceReduxApp;
