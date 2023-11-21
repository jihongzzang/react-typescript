import { Route, Routes } from 'react-router-dom';
import PolymorphicComponent from './Components/PolymorphicComponent';
import AssignComponents from './Components/AssignComponents/AssignComponents';
import DeepChildren from './Components/Children/DeepChildren';
import ContextBasic from './Components/Context/basic/Context';
import ContextBasic2 from './Components/Context/basic2/Context';
import ContextBasic3 from './Components/Context/basic3/Context';
import ContextReducer from './Components/ContextReducer/ContextReducer';
import ContextReducerRefactored from './Components/ContextReducerRefactored/ContextReducerRefactored';
import ExternalStoreFirst from './Components/ExternalStore/firstEx';
import ExternalStoreSecond from './Components/ExternalStore/secondEx';
import Counter from './Components/Reducer/basic/Counter';
import TodoList from './Components/Reducer/basic2/TodoList';
import Messenger from './Components/Reducer/basic3/Messenger';
import UI from './Components/UI';
import ReduxCopyEx from './Components/ExternalStore/reduxCopyExample';

function App() {
  return (
    <Routes>
      <Route index element={<UI />} />
      <Route path="children" element={<DeepChildren />} />
      <Route path="polymorphic" element={<PolymorphicComponent />} />
      <Route path="assigncomponents" element={<AssignComponents />} />

      <Route path="reducer/counter" element={<Counter />} />
      <Route path="reducer/todoList" element={<TodoList />} />
      <Route path="reducer/messanger" element={<Messenger />} />

      <Route path="context/basic" element={<ContextBasic />} />
      <Route path="context/basicTwo" element={<ContextBasic2 />} />
      <Route path="context/basicThree" element={<ContextBasic3 />} />
      <Route path="context/reducer" element={<ContextReducer />} />
      <Route
        path="context/reducer/refactored"
        element={<ContextReducerRefactored />}
      />

      <Route path="externalstore" element={<ExternalStoreFirst />} />
      <Route path="externalstore/tsyringe" element={<ExternalStoreSecond />} />
      <Route path="externalstore/reduxcopy" element={<ReduxCopyEx />} />
    </Routes>
  );
}

export default App;
