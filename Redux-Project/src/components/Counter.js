import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const show = useSelector(state => state.showCounter);


  const incrementHandler = (val) => {
    dispatch({type: 'increment', value: val});
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }


  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => incrementHandler(1)}>increment</button>
        <button onClick={() => incrementHandler(5)}>increment by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
