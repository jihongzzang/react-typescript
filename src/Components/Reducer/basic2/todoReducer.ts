export type Task = { id: number; text: string; done: boolean };

export function reducer(
  tasks: Task[],
  action: {
    type: 'added' | 'changed' | 'deleted';
    text?: string;
    id?: number;
    task?: Task;
  },
) {
  switch (action.type) {
    case 'added': {
      if (action.id && action.text) {
        return [
          ...tasks,
          {
            id: action?.id,
            text: action.text,
            done: false,
          },
        ];
      } else {
        throw Error('Need ID: ' + action.type);
      }
    }
    case 'changed': {
      return tasks.map((t) => {
        if (action.task && t.id === action?.task.id) {
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
      throw Error('Unknown action: ' + action.type);
    }
  }
}
