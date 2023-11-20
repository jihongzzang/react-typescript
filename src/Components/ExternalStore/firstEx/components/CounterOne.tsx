import { Box } from '@mui/material';
import { useState } from 'react';

export default function CounterOne() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  return (
    <Box width="fit-content" bgcolor="pink" p={4} border="1px solid black">
      <span>{`count: ${count}`}</span>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
    </Box>
  );
}
