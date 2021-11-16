import { useSelector, useDispatch } from "react-redux";
import styles from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleInc = () => dispatch({ type: "INCREMENT" });
  const handleDec = () => dispatch({ type: "DECREMENT" });
  const handleNumber = () => dispatch({ type: "ADD", payload: 10 });

  const toggleCounterHandler = () => {};

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      <div className={styles.value}>{counter}</div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleNumber}>Add 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
