import { useEffect } from 'react';
import { container } from 'tsyringe';
import useForceUpdate from '../../firstEx/hooks/useForceUpdate';
import CounterStore from '../stores/CounterStore';

export default function useCouterStore() {
  const forceUpdate = useForceUpdate();
  const store = container.resolve(CounterStore);

  useEffect(() => {
    store.addListener(forceUpdate);

    return () => store.removeListener(forceUpdate);
  }, [store, forceUpdate]);

  return store;
}
