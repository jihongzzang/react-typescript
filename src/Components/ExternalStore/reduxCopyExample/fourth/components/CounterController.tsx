import useCounterStore from '../hooks/useCounterStore';

export default function CounterController() {
  const [{ count }, store] = useCounterStore();

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
      <button type="button" onClick={() => store.decrease(10)}>
        Decrease 10
      </button>
    </div>
  );
}
