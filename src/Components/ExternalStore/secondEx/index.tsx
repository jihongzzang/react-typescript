import { Stack } from '@mui/material';
import Counter from './components/Counter';
import CounterController from './components/CounterController';

export default function ExternalStoreSecond() {
  return (
    <Stack width="fit-content" direction="column" gap={4}>
      <Counter />
      <Counter />
      <CounterController />
    </Stack>
  );
}
