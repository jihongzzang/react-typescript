import { Box } from '@mui/material';

import useForceUpdate from '../hooks/useForceUpdate';

const state = {
  count: 0,
};

function increase() {
  state.count += 1;
}

export default function CounterThree() {
  const { count } = state;

  const forceUpdate = useForceUpdate();

  const increaseCount = () => {
    increase();
    forceUpdate();
  };

  return (
    <Box width="fit-content" bgcolor="yellowgreen" p={4}>
      <span>{`count: ${count}`}</span>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
    </Box>
  );
}
