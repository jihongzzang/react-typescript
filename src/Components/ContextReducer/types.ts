export type TaskItem = { id: number; text: string; done: boolean };

export type Action =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: TaskItem }
  | { type: 'deleted'; id: number };
