import { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import '../../styles/styles.css';

function NestedInput() {
  const { register } = useFormContext();
  return <input placeholder="User Name" {...register('name')} />;
}

interface Form {
  name: string;
}

function NestedForm() {
  const [result, setResult] = useState('');

  const methods = useForm<Form>();

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
        <p>{result}</p>
      </form>
    </FormProvider>
  );
}

export default NestedForm;
