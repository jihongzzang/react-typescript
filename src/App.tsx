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
import ReduxEx from './Components/ExternalStore/reduxEx';

function App() {
  return (
    <Routes>
      <Route index element={<UI />} />
      <Route path="polymorphic" element={<PolymorphicComponent />} />

      <Route path="children" element={<DeepChildren />} />
      <Route path="assigncomponents" element={<AssignComponents />} />

      <Route path="reducer" element={<Counter />} />
      <Route path="reducer/2" element={<TodoList />} />
      <Route path="reducer/3" element={<Messenger />} />

      <Route path="context" element={<ContextBasic />} />
      <Route path="context/2" element={<ContextBasic2 />} />
      <Route path="context/3" element={<ContextBasic3 />} />

      <Route path="contextreducer" element={<ContextReducer />} />
      <Route path="contextreducer/2" element={<ContextReducerRefactored />} />

      <Route path="externalstore" element={<ExternalStoreFirst />} />
      <Route path="externalstore/tsyringe" element={<ExternalStoreSecond />} />
      <Route path="externalstore/redux" element={<ReduxEx />} />
    </Routes>
  );
}

export default App;
