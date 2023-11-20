import { Route, Routes } from 'react-router-dom';
import UI from 'Components/UI';
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
import PolymorphicComponent from 'Components/PolymorphicComponent';
import ExternalStoreFirst from 'Components/ExternalStore/firstEx';

function App() {
  return (
    <Routes>
      <Route index element={<UI />} />
      <Route path="children" element={<DeepChildren />} />
      <Route path="assigncomponents" element={<AssignComponents />} />
      <Route path="reducer/1" element={<Counter />} />
      <Route path="reducer/2" element={<TodoList />} />
      <Route path="reducer/3" element={<Messenger />} />
      <Route path="context" element={<ContextBasic />} />
      <Route path="context/2" element={<ContextBasic2 />} />
      <Route path="context/3" element={<ContextBasic3 />} />
      <Route path="contextreducer" element={<ContextReducer />} />
      <Route path="contextreducer/2" element={<ContextReducerRefactored />} />
      <Route path="polymorphic" element={<PolymorphicComponent />} />
      <Route path="externalstore" element={<ExternalStoreFirst />} />
    </Routes>
  );
}

export default App;
