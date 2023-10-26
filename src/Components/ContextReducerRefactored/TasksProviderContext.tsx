import { ReactNode, useContext, useReducer, createContext } from 'react';

import { tasksReducer, initialTasks } from './reducer';

import { TaskItem, Action } from './types';

const TasksContext = createContext<TaskItem[] | null>(null);

const TasksDispatchContext = createContext<React.Dispatch<Action> | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
