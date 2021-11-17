import { useSelector } from "react-redux";
import Header from "../components/Redux/Header";
import Auth from "../components/Redux/Auth";
import UserProfile from "../components/Redux/UserProfile";
import Counter from "../components/Redux/Counter";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
