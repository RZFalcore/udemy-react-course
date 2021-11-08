import React from "react";
import DecCounter from "../components/CustomHooks/DecCounter";
import IncCounter from "../components/CustomHooks/IncCounter";

const CustomHooksApp = () => {
  return (
    <>
      <IncCounter />
      <DecCounter />
    </>
  );
};

export default CustomHooksApp;
