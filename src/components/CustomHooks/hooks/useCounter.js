import { useState, useEffect } from "react";

const useCounter = (isIncrement = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isIncrement) setCounter((prevCounter) => prevCounter + 1);
      if (!isIncrement) setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [isIncrement]);
  return counter;
};

export default useCounter;
