import React, { useState } from "react";
import DemoOutput from "../components/OptimizationProject/Demo/DemoOutput";
import Button from "../components/OptimizationProject/UI/Button";
import styles from "./OptimizationApp.module.css";

const OptimizationApp = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHanlder = () =>
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  console.log("App render!");
  return (
    <div className={styles.app}>
      <h1>Hello there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHanlder}>
        {showParagraph ? "Hide" : "Show"} text
      </Button>
    </div>
  );
};

export default OptimizationApp;
