import Carousel from '../Carousel/Carousel';
import ModalExample from '../Modal/ModalExample';
import ErrorHandleForm from '../ReactHookForm/ErrorHandleForm';
import NestedForm from '../ReactHookForm/NestedForm';
import ReactHookForm from '../ReactHookForm/ReactHookForm';
import Register from '../ReactHookForm/Register';
import Register2 from '../ReactHookForm/Register2';
import ValidationForm from '../ReactHookForm/ValidationForm';
import ExampleSkeleton from '../Skeleton/ExampleSkeleton';

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
