import { Stack } from '@mui/material';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';

export default function ExternalStoreFirst() {
  return (
    <Stack width="fit-content" direction="column" gap={4}>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
    </Stack>
  );
}
