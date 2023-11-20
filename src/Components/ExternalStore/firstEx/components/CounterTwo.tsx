import { useReducer } from 'react';
import { Box } from '@mui/material';

type State = {
  count: number;
};

const state = {
  count: 0,
};

function reducer(state: State) {
  return { ...state, count: state.count + 1 };
}

export default function CounterTwo() {
  const { count } = state;

  const [, forceUpdate] = useReducer(reducer, { count: 0 });

  const increaseCount = () => {
    state.count += 1;
    forceUpdate();
  };

  return (
    <Box width="fit-content" bgcolor="teal" p={4} border="1px solid black">
      <span>{`count: ${count}`}</span>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
    </Box>
  );
}
