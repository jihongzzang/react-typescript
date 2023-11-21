import { useEffect } from 'react';
import { container } from 'tsyringe';

import useForceUpdate from '../../../firstEx/hooks/useForceUpdate';
import Store from '../stores/Store';

export default function useStore() {
  const store = container.resolve(Store);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListeners(forceUpdate);

    return () => store.removeListeners(forceUpdate);
  }, [store, forceUpdate]);

  return store;
}
