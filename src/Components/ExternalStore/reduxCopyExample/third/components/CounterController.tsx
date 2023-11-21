import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

import { increase, decrease } from '../stores/Store';

export default function CouxnterController() {
  const disaptch = useDispatch();

  const count = useSelector((state) => state.count);

  return (
    <div>
      <p>{`countController: ${count}`}</p>
      <button type="button" onClick={() => disaptch(increase())}>
        Increase
      </button>
      <button type="button" onClick={() => disaptch(decrease())}>
        Decrease
      </button>
    </div>
  );
}
