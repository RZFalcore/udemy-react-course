import { Provider } from "react-redux";
import Header from "../components/Redux/Header";
import Auth from "../components/Redux/Auth";
// import moduleName from "module";
import Counter from "../components/Redux/Counter";
import store from "../components/Redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Auth />
      <Counter />
    </Provider>
  );
}

export default App;
