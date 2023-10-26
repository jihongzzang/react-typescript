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
import Messenger from 'Components/Reducer/basic3/Messenger';
import ContextBasic from 'Components/Context/basic/Context';
import ContextBasic2 from 'Components/Context/basic2/Context';
import ContextBasic3 from 'Components/Context/basic3/Context';
import ContextReducer from 'Components/ContextReducer/ContextReducer';
import ContextReducerRefactored from 'Components/ContextReducerRefactored/ContextReducerRefactored';

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
        element={
          <div>
            <TodoList />
          </div>
        }
      />
      <Route
        path="reducer/3"
        element={
          <div>
            <Messenger />
          </div>
        }
      />
      <Route
        path="context"
        element={
          <div>
            <ContextBasic />
          </div>
        }
      />
      <Route
        path="context/2"
        element={
          <div>
            <ContextBasic2 />
          </div>
        }
      />
      <Route
        path="context/3"
        element={
          <div>
            <ContextBasic3 />
          </div>
        }
      />

      <Route
        path="contextreducer"
        element={
          <div>
            <ContextReducer />
          </div>
        }
      />
      <Route
        path="contextreducer/2"
        element={
          <div>
            <ContextReducerRefactored />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
