import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Form {
  name: string;
  password: string;
}

function Register() {
  const [result, setResult] = useState('');

  const { register, handleSubmit } = useForm<Form>();

  const onSubmit = (data: Form) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('name')} placeholder="User Name" />
      <input
        type="password"
        {...register('password')}
        placeholder="User Password"
      />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default Register;
