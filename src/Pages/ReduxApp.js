import Counter from "../components/Redux/Counter";
import { Provider } from "react-redux";
import store from "../components/Redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
