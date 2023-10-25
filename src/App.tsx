import ErrorHandleForm from 'Components/ReactHookForm/ErrorHandleForm';
import ValidationForm from 'Components/ReactHookForm/ValidationForm';
import Register2 from 'Components/ReactHookForm/Register2';
import Register from 'Components/ReactHookForm/Register';
import NestedForm from 'Components/ReactHookForm/NestedForm';
import ReactHookForm from 'Components/ReactHookForm/ReactHookForm';
import InfiniteScroll2 from 'Components/InfiniteScroll2/InfiniteScroll2';
import InfiniteScroll from 'Components/InfiniteScroll/InfinteScoll';
import ModalExample from 'Components/Modal/ModalExample';
import PaginationExample from 'Components/Pagination/PaginationExample';
import Carousel from 'Components/Carousel/Carousel';
import ExampleSkeleton from 'Components/Skeleton/ExampleSkeleton';
import { Route, Routes } from 'react-router-dom';
import AssignComponents from 'Components/AssignComponents/AssignComponents';
import DeepChildren from 'Components/Children/DeepChildren';
import Counter from 'Components/Reducer/basic/Counter';
import TodoList from 'Components/Reducer/basic2/TodoList';

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <ErrorHandleForm />
            <ValidationForm />
            <Register2 />
            <Register />
            <NestedForm />
            <ReactHookForm />
            <InfiniteScroll2 />
            <InfiniteScroll />
            <ModalExample />
            <PaginationExample />
            <Carousel />
            <ExampleSkeleton />
          </div>
        }
      />
      <Route
        path="children"
        element={
          <div>
            <DeepChildren />
          </div>
        }
      />
      <Route
        path="assigncomponents"
        element={
          <div>
            <AssignComponents />
          </div>
        }
      />
      <Route
        path="reducer/1"
        element={
          <div>
            <Counter />
          </div>
        }
      />
      <Route
        path="reducer/2"
        id="2"
        element={
          <div>
            <TodoList />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
