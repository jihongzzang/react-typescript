import 'reflect-metadata';

import Counter from './components/Counter';
import CounterController from './components/CounterController';
import { Box } from '@mui/material';

export default function ReduxThrid() {
  return (
    <Box bgcolor={'yellowgreen'} width={'fit-content'}>
      <Counter />
      <Counter />
      <CounterController />
    </Box>
  );
}
