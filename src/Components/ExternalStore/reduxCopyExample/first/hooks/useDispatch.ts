import useStore from './useStore';

import { Action } from '../stores/BaseStore';

export default function useDispatch() {
  const store = useStore();

  return (action: Action) => {
    store.dispatch(action);
  };
}
