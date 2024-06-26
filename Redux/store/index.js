
import { createStore } from 'redux';

const reducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(reducer);

const subscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(subscriber);
store.dispatch({type: 'increment'})

export default store;