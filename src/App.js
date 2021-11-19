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
import ReduxCart from './Pages/ReduxCart';
import { Provider } from "react-redux";
import store from "./components/ReduxCart/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxCart />
      </Provider>
    </div>
  );
}

export default App;
