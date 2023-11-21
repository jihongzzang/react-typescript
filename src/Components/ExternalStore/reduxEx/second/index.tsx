import useCounterStore from './hooks/useCountStore';

export default function ReduxSecond() {
  const store = useCounterStore();

  const { count } = store;

  const increase = () => {
    store.increase();
  };

  const decrease = () => {
    store.increase();
  };

  const increaseTen = () => {
    store.increase(10);
  };

  return (
    <div>
      {count}
      <button type="button" onClick={increase}>
        Increase
      </button>
      <button type="button" onClick={decrease}>
        decrease
      </button>
      <button type="button" onClick={increaseTen}>
        Increase 10
      </button>
    </div>
  );
}
