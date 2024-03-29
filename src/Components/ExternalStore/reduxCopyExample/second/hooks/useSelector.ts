import { container } from 'tsyringe';

import { useEffect, useState } from 'react';

import Store, { State } from '../stores/Store';

import useForceUpdate from '../../../firstEx/hooks/useForceUpdate';

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);

  const [state, setState] = useState<T>(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);

      if (!shallowEqual(newState, state)) {
        setState(newState);
        forceUpdate();
      }

      if (newState !== state) {
        forceUpdate();
        setState(newState);
      }
    };

    store.addListener(update);

    return () => store.removeListener(update);
  }, [state, forceUpdate]);

  return state;
}

function shallowEqual(objA: any, objB: any): boolean {
  for (const key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
