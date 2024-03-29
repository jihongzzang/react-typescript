import { singleton } from 'tsyringe';

import BaseStore, { Action } from './BaseStore';

const initialState = { count: 0, name: 'jihong' };

export type State = typeof initialState;

function increase(state: State, action: Action<number>) {
  return { ...state, count: state.count + (action.payload ?? 1) };
}

function decrease(state: State, action: Action<number>) {
  return {
    ...state,
    count: state.count - (action.payload ?? 1),
  };
}

const reducers = {
  increase,
  decrease,
};

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers);
  }
}
