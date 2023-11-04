import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux'

const Counter = () => {
 const dispatch = useDispatch()
 const counter =  useSelector(state => state.counter)
  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }
  const incrementBy5Handler = () => {
    dispatch({type: 'incrementBy5', value: 5})
  }

  const decrementHandler = () => {
   dispatch({type: 'decrement'})
  }

  return (
    <div className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className="counter button">
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementBy5Handler}>increase by 5</button>
      </div>
    </div>
  );
};

export default Counter;
