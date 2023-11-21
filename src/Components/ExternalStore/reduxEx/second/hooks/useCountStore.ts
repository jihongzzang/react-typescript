import { container } from 'tsyringe';

import useActionStore from './useActionStore';

import CountStore from '../stores/CountStore';

export default function useCounterStore() {
  const store = container.resolve(CountStore);

  return useActionStore(store);
}
