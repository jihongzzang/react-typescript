import { Box } from '@mui/material';

// import { useEffect } from 'react';
// import { container } from 'tsyringe';
// import useForceUpdate from '../../firstEx/hooks/useForceUpdate';
// import CounterStore from '../stores/CounterStore';

// export default function Counter() {
//   const store = container.resolve(CounterStore);
//   const forceUpdate = useForceUpdate();

//   // useEffect(() => {
//   //   store.forceUpdates.add(forceUpdate);s

//   //   return () => {
//   //     store.forceUpdates.delete(forceUpdate);
//   //   };
//   // }, [store, forceUpdate]);

//   useEffect(() => {
//     store.addListener(forceUpdate);

//     return () => store.removeListener(forceUpdate);
//   }, [store, forceUpdate]);

//   const { count } = store;

//   return (
//     <Box
//       width="fit-content"
//       bgcolor="yellowgreen"
//       p={4}
//       border="1px solid black"
//     >
//       <span>{`count: ${count}`}</span>
//     </Box>
//   );
// }

import useCouterStore from '../hooks/useCounterStore';

export default function Counter() {
  const store = useCouterStore();

  return (
    <Box
      width="fit-content"
      bgcolor="yellowgreen"
      p={4}
      border="1px solid black"
    >
      <span>{`count: ${store.count}`}</span>
    </Box>
  );
}
