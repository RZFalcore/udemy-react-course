import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleTextChange = () => {
    setChangedText((flag) => !flag);
  };
  return (
    <div>
      <h2>Hello there!</h2>
      {changedText && <p>Changed!</p>}
      {!changedText && <p>Not changed!</p>}
      <button onClick={handleTextChange}>Change!</button>
    </div>
  );
};

export default Greeting;
