import { Action, TaskItem } from './types';

export const initialTasks: TaskItem[] = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];

export function tasksReducer(tasks: TaskItem[], action: Action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error('Unknown action');
    }
  }
}
