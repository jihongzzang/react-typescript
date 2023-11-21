import 'reflect-metadata';

import { Box, Typography } from '@mui/material';

import Counter from './components/Counter';

import CounterController from './components/CounterController';

export default function ReduxThird() {
  return (
    <Box bgcolor={'pink'} width={'fit-content'}>
      <Typography component={'h2'} color={'white'} textAlign={'center'}>
        useStore-ts
      </Typography>
      <Counter />
      <Counter />
      <CounterController />
    </Box>
  );
}
