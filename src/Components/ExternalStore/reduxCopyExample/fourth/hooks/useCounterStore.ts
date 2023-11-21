import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import CountStore from '../stores/CounterStore';

export default function useCounterStore() {
  const store = container.resolve(CountStore);

  return useStore(store);
}
