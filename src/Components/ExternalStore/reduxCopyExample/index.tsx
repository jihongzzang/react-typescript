import { Stack } from '@mui/material';

import ReduxFirst from './first';

import ReduxSecond from './second';

import ReduxThrid from './third';

import ReduxFourth from './fourth';

export default function ReduxCopyEx() {
  return (
    <Stack gap={2}>
      <Stack width={'fit-content'} gap={2}>
        <ReduxFirst />
        <ReduxSecond />
      </Stack>
      <Stack width={'fit-content'} gap={2}>
        <ReduxThrid />
        <ReduxFourth />
      </Stack>
    </Stack>
  );
}
