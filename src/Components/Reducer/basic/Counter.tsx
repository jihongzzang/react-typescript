import { useReducer } from 'react';
import { reducer } from './counterReducer';

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleIncrementButton() {
    dispatch({ type: 'increment' });
  }

  function handleDecrementButton() {
    dispatch({ type: 'decrement' });
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '20px',
        border: '1px solid black',
        width: 'fit-content',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button type="button" onClick={handleIncrementButton}>
          Increment
        </button>
        <button type="button" onClick={handleDecrementButton}>
          Decrement
        </button>
      </div>
      <div>{state.count}</div>
    </div>
  );
}

export default Counter;
