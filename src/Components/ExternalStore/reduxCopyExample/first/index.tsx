import 'reflect-metadata';

import { Box, Typography } from '@mui/material';

import Counter from './components/Counter';

import CounterController from './components/CounterController';

export default function ReduxFirst() {
  return (
    <Box bgcolor={'yellowgreen'} width={'fit-content'}>
      <Typography component={'h2'} color={'white'} textAlign={'center'}>
        reduxly
      </Typography>
      <Counter />
      <Counter />
      <CounterController />
    </Box>
  );
}
