import React, { createContext } from 'react';

import { Action, TaskItem } from './types';

/**deprecated */

export const TasksContext = createContext<TaskItem[] | null>(null);

export const TasksDispatchContext =
  createContext<React.Dispatch<Action> | null>(null);
