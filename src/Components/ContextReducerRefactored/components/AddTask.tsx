import { useState } from 'react';

import { useTasksDispatch } from '../TasksProviderContext';

let nextId = 3;

export function AddTask() {
  const dispatch = useTasksDispatch();

  const [text, setText] = useState('');

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={!text}
        onClick={() => {
          setText('');
          dispatch?.({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
