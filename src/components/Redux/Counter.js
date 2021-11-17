import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/counter";
import styles from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const handleInc = () => dispatch(counterActions.increment());
  const handleDec = () => dispatch(counterActions.decrement());
  const handleNumber = () => dispatch(counterActions.add(10));
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleNumber}>Add 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
