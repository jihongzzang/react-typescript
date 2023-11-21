import { Box } from '@mui/material';

import NameCard from './components/NameCard';
import Counter from './components/Counter';
import CounterController from './components/CounterController';

export default function ReduxFirst() {
  return (
    <Box bgcolor={'teal'} width={'fit-content'}>
      <NameCard />
      <Counter />
      <Counter />
      <CounterController />
    </Box>
  );
}
