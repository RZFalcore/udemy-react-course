import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleTextChange = () => {
    setChangedText((flag) => !flag);
  };
  return (
    <div>
      <h2>Hello there!</h2>
      {changedText && <Output>Changed!</Output>}
      {!changedText && <Output>Not changed!</Output>}
      <button onClick={handleTextChange}>Change!</button>
    </div>
  );
};

export default Greeting;
