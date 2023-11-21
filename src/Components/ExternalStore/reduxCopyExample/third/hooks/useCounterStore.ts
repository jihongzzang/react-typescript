import { container } from 'tsyringe';

import useObjectStore from './useObjectStore';

import CountStore from '../stores/CounterStore';

export default function useCounterStore() {
  const store = container.resolve(CountStore);

  return useObjectStore(store);
}
