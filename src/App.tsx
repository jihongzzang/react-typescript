import ErrorHandleForm from 'Components/ReactHookForm/ErrorHandleForm';
import ValidationForm from 'Components/ReactHookForm/ValidationForm';
import Register2 from 'Components/ReactHookForm/Register2';
import Register from 'Components/ReactHookForm/Register';
import NestedForm from 'Components/ReactHookForm/NestedForm';
import ReactHookForm from 'Components/ReactHookForm/ReactHookForm';
// import InfiniteScroll2 from 'Components/InfiniteScroll2/InfiniteScroll2';
// import InfiniteScroll from 'Components/InfiniteScroll/InfinteScoll';
// import ModalExample from 'Components/Modal/ModalExample';
// import PaginationExample from 'Components/Pagination/PaginationExample';
// import Carousel from 'Components/Carousel/Carousel';
// import ExampleSkeleton from 'Components/Skeleton/ExampleSkeleton';

function App() {
  return (
    <>
      <ErrorHandleForm />
      <ValidationForm />
      <Register2 />
      <Register />
      <NestedForm />
      <ReactHookForm />
      {/* <InfiniteScroll2 /> */}
      {/* <InfiniteScroll /> */}
      {/* <ModalExample /> */}
      {/* <PaginationExample /> */}
      {/* <Carousel /> */}
      {/* <ExampleSkeleton /> */}
    </>
  );
}

export default App;
