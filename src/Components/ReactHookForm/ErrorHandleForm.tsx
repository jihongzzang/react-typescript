import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Form {
  age: number;
}

function ErrorHandleForm() {
  const [result, setResult] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="Age"
        {...register('age', { required: true, min: 17, max: 40 })}
      />
      {errors.age?.type === 'required' && <span>Age is required</span>}
      {errors.age?.type === 'min' && <span>Minimum Age is 17</span>}
      {errors.age?.type === 'max' && <span>Maximum Age is 40</span>}
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default ErrorHandleForm;
