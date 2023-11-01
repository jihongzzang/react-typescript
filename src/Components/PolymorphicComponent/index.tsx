import { Stack } from '@mui/material';
import Text from './PolymorphicText';

export default function PolymorphicComponent() {
  return (
    <Stack direction={'column'}>
      <Text as="h1">Heading1 Text</Text>

      <Text as="div">div Text</Text>

      <Text as="span">span Text</Text>

      <Text as="a" href="hi">
        anchor Text
      </Text>
    </Stack>
  );
}
