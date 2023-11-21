import { useEffect } from 'react';

import useForceUpdate from '../../../firstEx/hooks/useForceUpdate';

import ObejctStore from '../stores/ObjectStore';

export default function useObejctStore<T extends ObejctStore>(store: T) {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => store.removeListener(forceUpdate);
  }, [store]);

  return store;
}
