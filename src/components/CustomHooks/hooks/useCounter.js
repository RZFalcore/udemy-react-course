import { useState, useEffect } from "react";

const useConter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
};

export default useCounter;
