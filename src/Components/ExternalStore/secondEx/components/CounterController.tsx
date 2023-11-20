import { container } from 'tsyringe';

import Store from '../stores/Store';

export default function CounterController() {
  const store = container.resolve(Store);

  const increaseCount = () => {
    store.count += 1;
    store.update();
  };

  return (
    <button type="button" onClick={increaseCount}>
      Increase
    </button>
  );
}
