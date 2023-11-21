// import { container } from 'tsyringe';
// import CounterStore from '../stores/CounterStore';

// export default function CounterController() {
//   const store = container.resolve(CounterStore);

//   const increaseCount = () => {
//     store.count += 1;
//     store.publish();
//   };

//   const decreaseCount = () => {
//     store.count -= 1;
//     store.publish();
//   };

//   return (
//     <>
//       <p>{store.count}</p>
//       <button type="button" onClick={increaseCount}>
//         Increase
//       </button>
//       <button type="button" onClick={decreaseCount}>
//         Decrease
//       </button>
//     </>
//   );
// }

// import useCouterStore from '../hooks/useCounterStore';

// export default function CounterController() {
//   const store = useCouterStore();

//   const increaseCount = () => {
//     store.count += 1;
//     store.publish();
//   };

//   const decreaseCount = () => {
//     store.count -= 1;
//     store.publish();
//   };

// increaseCount 와 decreaseCount

//   return (
//     <>
//       <p>{store.count}</p>
//       <button type="button" onClick={increaseCount}>
//         Increase
//       </button>
//       <button type="button" onClick={decreaseCount}>
//         Decrease
//       </button>
//     </>
//   );
// }

import useCouterStore from '../hooks/useCounterStore';

export default function CounterController() {
  const store = useCouterStore();

  const increaseCount = () => {
    store.increase();
  };

  const decreaseCount = () => {
    store.decrease();
  };

  return (
    <>
      <p>{store.count}</p>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
      <button type="button" onClick={decreaseCount}>
        Decrease
      </button>
    </>
  );
}
