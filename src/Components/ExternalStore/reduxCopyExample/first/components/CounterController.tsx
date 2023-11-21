import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

export default function CouxnterController() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>{`countController: ${count}`}</p>
      <button type="button" onClick={() => dispatch({ type: 'increase' })}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrease' })}>
        decrease
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increase', payload: 10 })}
      >
        Increase 10
      </button>
    </div>
  );
}
