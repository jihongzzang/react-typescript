import useDispatch from './hooks/useDispatch';
import useSelector from './hooks/useSelector';

export default function ReduxFirst() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const increase = () => {
    dispatch({ type: 'increase' });
  };
  const decrease = () => {
    dispatch({ type: 'decrease' });
  };

  const increaseTen = () => {
    dispatch({ type: 'increase', payload: 10 });
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
