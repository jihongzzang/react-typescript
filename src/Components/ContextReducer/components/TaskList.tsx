import { TaskItem } from '../types';

import { Task } from './Task';

export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: TaskItem[];
  onChangeTask: (value: TaskItem) => void;
  onDeleteTask: (value: number) => void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
