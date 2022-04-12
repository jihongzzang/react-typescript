import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Form {
  age: number;
}

function ValidationForm() {
  const [result, setResult] = useState('');

  const { register, handleSubmit } = useForm<Form>();

  const onSubmit = (data: Form) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="Age"
        {...register('age', { required: true, min: 17 })}
      ></input>
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default ValidationForm;
