import { useEffect } from 'react';

import useForceUpdate from '../../../firstEx/hooks/useForceUpdate';

import ActionStore from '../stores/ActionStore';

export default function useActionStore<T extends ActionStore>(store: T) {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => store.removeListener(forceUpdate);
  }, [store]);

  return store;
}
