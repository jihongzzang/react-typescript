import { useState } from 'react';

import { useTasksDispatch } from '../TasksProviderContext';

import { TaskItem } from '../types';

export function Task({ task }: { task: TaskItem }) {
  const dispatch = useTasksDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeEditing = (type: 'on' | 'off') => {
    if (type === 'on') {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch?.({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => handleChangeEditing('off')}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => handleChangeEditing('on')}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch?.({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch?.({
            type: 'deleted',
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </label>
  );
}
