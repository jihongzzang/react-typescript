import { useState } from 'react';

type Reducer<State, Action> = (state: State, action: Action) => State;

export function useCustomReducer<State, Action>(
  reducer: Reducer<State, Action>,
  initialState: State,
): [State, (action: Action) => void] {
  const [state, setState] = useState<State>(initialState);

  function dispatch(action: Action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}
