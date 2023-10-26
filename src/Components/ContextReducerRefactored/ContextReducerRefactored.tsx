import { TasksProvider } from './TasksProviderContext';

import { AddTask, TaskList } from './components';

import './style.css';

function ContextReducerRefactored() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default ContextReducerRefactored;
