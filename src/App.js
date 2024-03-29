import React from "react";
// import ExpensesApp from "./Pages/ExpensesApp";
// import AddUserApp from "./Pages/AddUserApp";
// import LoginPageApp from "./Pages/LoginPageApp";
// import FoodOrder from "./Pages/FoodOrderApp";
// import OptimizationApp from './Pages/OptimizationApp';
// import ClassComponentsApp from './Pages/ClassComponentsApp';
// import HtttpRequestApp from './Pages/HttpRequestsApp';
// import CustomHooksApp from './Pages/CustomHooksApp'
// import FormsApp from './Pages/FormsApp';
// ---------
// import ReduxApp from './Pages/ReduxApp';
// import { Provider } from "react-redux";
// import store from "./components/Redux/store/index";
// ---------
// import ReduxCart from './Pages/ReduxCart';
// import { Provider } from "react-redux";
// import store from "./components/ReduxCart/store/store";
// ---------
// import RoutingApp from "./Pages/RoutingApp";
// import CommentsApp from './Pages/CommentsApp';
// ---------
// import AuthApp from './Pages/AuthApp';
// ---------
// import AnimationsApp from "./Pages/AnimationsApp";
// import ReplaceReduxApp from './Pages/ReplaceRedux';
// import TestingApp from "./Pages/TestingApp";
// ---------
// import HooksApp from "./Pages/HooksApp";
// import AuthProvider from "./components/HooksApp/context/auth-context";
// ---------
import SummaryApp from './Pages/SummaryApp';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SummaryApp />
    </BrowserRouter>
  );
}

export default App;
