import { useForm } from 'react-hook-form';

function Register2() {
  const { register, watch } = useForm();

  const watchNickName = watch('nickname', '주지홍');

  return (
    <form>
      <input type="text" {...register('nickname')} placeholder="Nick Name" />

      <p>{watchNickName}</p>
    </form>
  );
}

export default Register2;
