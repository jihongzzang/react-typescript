import { Box } from '@mui/material';

import { container } from 'tsyringe';

import Store from '../stores/Store';
import useForceUpdate from 'Components/ExternalStore/firstEx/hooks/useForceUpdate';
import { useEffect } from 'react';

export default function Counter() {
  const store = container.resolve(Store);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.forceUpdates.add(forceUpdate);

    return () => {
      store.forceUpdates.delete(forceUpdate);
    };
  }, [store, forceUpdate]);

  const { count } = store;

  return (
    <Box
      width="fit-content"
      bgcolor="yellowgreen"
      p={4}
      border="1px solid black"
    >
      <span>{`count: ${count}`}</span>
    </Box>
  );
}
