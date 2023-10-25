export function reducer(
  state: { count: number },
  action: { type: 'increment' | 'decrement' },
) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
}
