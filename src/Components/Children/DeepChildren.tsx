import React, { Children, ReactNode } from 'react';

const fruits = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'kiwi' },
];

function Box({ children }: { children: ReactNode }) {
  console.log(Children.toArray(children)); // array

  return <>{children}</>;
}

function DeepChildren() {
  return (
    <Box>
      <React.Fragment>
        <div className="banana">banana</div>
        <div className="melon">melon</div>
      </React.Fragment>

      {fruits.map((item) => (
        <div key={`${item.id}_${item.name}`} className={item.name}>
          {item.name}
        </div>
      ))}
    </Box>
  );
}

export default DeepChildren;
