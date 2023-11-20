import { Stack } from '@mui/material';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import CounterMachine from './components/CounterMachine';
import CounterMachineTwo from './components/CounterMachineTwo';
import CounterMachineThree from './components/CounterMachineThree';

export default function ExternalStoreFirst() {
  return (
    <Stack width="fit-content" direction="column" gap={4}>
      <Stack direction="row" gap={2}>
        <CounterOne />
        <CounterTwo />
        <CounterThree />
      </Stack>
      <Stack direction="row" gap={2}>
        <CounterMachine />
        <CounterMachineTwo />
        <CounterMachineThree />
      </Stack>
    </Stack>
  );
}
