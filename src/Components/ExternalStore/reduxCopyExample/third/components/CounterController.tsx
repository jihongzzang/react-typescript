import useCounterStore from '../hooks/useCounterStore';

export default function CounterController() {
  const store = useCounterStore();

  const { count } = store;

  return (
    <div>
      <p>{`countController: ${count}`}</p>
      <button type="button" onClick={() => store.increase()}>
        Increase
      </button>
      <button type="button" onClick={() => store.decrease()}>
        Decrease
      </button>
      <button type="button" onClick={() => store.increase(10)}>
        Increase 10
      </button>
    </div>
  );
}
