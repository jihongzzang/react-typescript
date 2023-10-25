import { useReducer, useState } from 'react';
import { reducer, Task } from './todoReducer';

const initialTasks: Task[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

let nextId = 3;

function AddTask({ onAddTask }: { onAddTask: (text: string) => void }) {
  const [text, setText] = useState('');

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="button" disabled={!text} onClick={() => onAddTask(text)}>
        add
      </button>
    </div>
  );
}

function TaskItem({
  task,
  onChangeTask,
  onDeleteTask,
}: {
  task: Task;
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <label
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          margin: '8px 0',
        }}
      >
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </label>
    </div>
  );
}

function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialTasks);

  function handleAddTask(text: string) {
    dispatch({ type: 'added', id: nextId++, text: text });
  }

  function handleChangeTextField(task: Task) {
    dispatch({ type: 'changed', task: task });
  }

  function handleDeleteTask(taskId: number) {
    dispatch({ type: 'deleted', id: taskId });
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '20px',
        border: '1px solid black',
        width: 'fit-content',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={state}
          onChangeTask={handleChangeTextField}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default TodoList;
