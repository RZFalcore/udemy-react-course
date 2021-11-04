import React from "react";

const DemoOutput = ({ show }) => {
  console.log("Demo render");
  return <p>{show ? "New paragraph." : ""}</p>;
};

export default DemoOutput;
