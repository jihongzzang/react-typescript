import Carousel from 'Components/Carousel/Carousel';
// import InfiniteScroll from 'Components/InfiniteScroll/InfinteScoll';
// import InfiniteScroll2 from 'Components/InfiniteScroll2/InfiniteScroll2';
import ModalExample from 'Components/Modal/ModalExample';
// import PaginationExample from 'Components/Pagination/PaginationExample';
import ErrorHandleForm from 'Components/ReactHookForm/ErrorHandleForm';
import NestedForm from 'Components/ReactHookForm/NestedForm';
import ReactHookForm from 'Components/ReactHookForm/ReactHookForm';
import Register from 'Components/ReactHookForm/Register';
import Register2 from 'Components/ReactHookForm/Register2';
import ValidationForm from 'Components/ReactHookForm/ValidationForm';
import ExampleSkeleton from 'Components/Skeleton/ExampleSkeleton';

export default function UI() {
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
      <ModalExample />
      {/* <PaginationExample /> */}
      <Carousel />
      <ExampleSkeleton />
    </>
  );
}
