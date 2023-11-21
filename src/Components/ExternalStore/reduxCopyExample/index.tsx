import { Stack } from '@mui/material';
import ReduxFirst from './first';
import ReduxSecond from './second';
import ReduxThrid from './third';

export default function ReduxCopyEx() {
  return (
    <Stack gap={2}>
      <ReduxThrid />
      <ReduxFirst />
      <ReduxSecond />
    </Stack>
  );
}
