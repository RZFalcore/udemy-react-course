import React, { useContext } from "react";
import { AuthContext } from "../components/HooksApp/context/auth-context";
import Ingridients from "../components/HooksApp/Ingredients/Ingredients";
import Auth from "../components/HooksApp/Auth";
import "./HooksApp.css";

const HooksApp = () => {
  const authContext = useContext(AuthContext);
  return <>{authContext.isAuth ? <Ingridients /> : <Auth />}</>;
};

export default HooksApp;
