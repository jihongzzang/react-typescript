import 'reflect-metadata';

import { Box, Typography } from '@mui/material';

import NameCard from './components/NameCard';

import Counter from './components/Counter';

import CounterController from './components/CounterController';

export default function ReduxSecond() {
  return (
    <Box bgcolor={'teal'} width={'fit-content'}>
      <Typography component={'h2'} color={'white'} textAlign={'center'}>
        reduxly deep
      </Typography>
      <NameCard />
      <Counter />
      <Counter />
      <CounterController />
    </Box>
  );
}
