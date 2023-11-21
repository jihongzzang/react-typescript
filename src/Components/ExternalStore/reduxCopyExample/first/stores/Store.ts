import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

const initialState = {
  count: 0,
};

export type State = typeof initialState;

const reducers = {
  increase(state: State) {
    return {
      ...state,
      count: state.count + 1,
    };
  },

  decrease(state: State) {
    return {
      ...state,
      count: state.count - 1,
    };
  },
};

function reducer(state: State, action: Action) {
  const f = Reflect.get(reducers, action.type);
  if (!f) {
    return state;
  }
  return f(state, action);
}

// function reducer(state: State, action: Action) {
//   switch (action.type) {
//     case 'increase':
//       return {
//         ...state,
//         count: state.count + 1,
//       };

//     case 'decrease':
//       return {
//         ...state,
//         count: state.count - 1,
//       };

//     default:
//       return state;
//   }
// }

export function increase() {
  return { type: 'increase' };
}

export function decrease() {
  return { type: 'decrease' };
}

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducer);
  }
}
