import { useContext, ReactNode } from 'react';

import { LevelContext } from '../LevelContext';

export function Section({
  children,
  isFancy = false,
}: {
  children: ReactNode;
  isFancy?: boolean;
}) {
  const level = useContext(LevelContext);

  return (
    <section className={'section ' + (isFancy ? 'fancy' : '')}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
