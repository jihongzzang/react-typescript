import useCounterStore from '../hooks/useCounterStore';

export default function Counter() {
  const [state] = useCounterStore();

  const { count } = state;

  return (
    <div>
      <p>{`count: ${count}`}</p>
    </div>
  );
}
