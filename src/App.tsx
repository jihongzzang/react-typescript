/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Home from './Components/Location/pages/Home';
import About from './Components/Location/pages/About';
import Layout from './Components/Location/components/Layout';
import Logout from './Components/Location/pages/Logout';
import Bye from './Components/Location/pages/Bye';

// import routes from './Components/Location/components/routes';
// const router = createBrowserRouter(routes);

function App() {
  return (
    <Routes>
      <Route index element={<UI />} />

      <Route element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route path="logout" element={<Logout />} />
        <Route path="bye" element={<Bye />} />
      </Route>

      <Route path="children" element={<DeepChildren />} />
      <Route path="polymorphic" element={<PolymorphicComponent />} />
      <Route path="assigncomponents" element={<AssignComponents />} />

      <Route path="reducer">
        <Route path="counter" element={<Counter />} />
        <Route path="todoList" element={<TodoList />} />
        <Route path="messanger" element={<Messenger />} />
      </Route>

      <Route path="context">
        <Route path="basic" element={<ContextBasic />} />
        <Route path="basicTwo" element={<ContextBasic2 />} />
        <Route path="basicThree" element={<ContextBasic3 />} />
        <Route path="reducer">
          <Route path="" element={<ContextReducer />} />
          <Route path="refactored" element={<ContextReducerRefactored />} />
        </Route>
      </Route>

      <Route path="externalstore">
        <Route path="" element={<ExternalStoreFirst />} />
        <Route path="tsyringe" element={<ExternalStoreSecond />} />
        <Route path="reduxcopy" element={<ReduxCopyEx />} />
      </Route>
    </Routes>
  );
}

export default App;
