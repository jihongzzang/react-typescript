### **React Hook Form**

#### **제어 컴포넌트**

- 제어된 입력은 현재값을 `prop`, `state` 로 받고 해당 값을 변경하기 위한 콜백을 받는다.

```js
import React, { FormEvent, useState } from 'react';

function App() {
  const [value, setValue] = useState < string > '';
  const [result, setResult] = useState < string > '';

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setResult(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleNameChange} />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default App;
```

- 일반적으로 제어 컴포넌트는 입력을 렌더링하는 컴포넌트에서 해당 상태를 저장
- 물론 컴포넌트의 상태일 수 도 있고 Redux 와 같은 별도의 상태 저장소에 있을 수도 있다.
- 아래의 예시에서 새 문자를 입력할 때마다 handleNameChange 가 호출되어 입력의 새 값을 상태로 저장.
- 아 때문에 입력값을 변경할 때마다 리렌더링이 발생.
- 이러한 특징 때문에 값을 명시적으로 요청할 필요가 없이 입력 상태값이 항상 최신의 값을 갖게 된다.

#### **비제어 컴포넌트**

- 사용자가 입력한 것을 기억하고, 아래의 예시와 같이 ref 를 사용하여 값을 얻을 수 있다.

```js
import React, { FormEvent, useRef, useState } from 'react';

function App() {
  const inputRef = useRef < HTMLInputElement > null;

  const [result, setResult] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    inputRef.current && setResult(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default App;
```

- 즉, 필요할 때 필드에서 값을 가져와야 한다.

> 일반적으로 리액트에서는 제어 컴포넌트 (Controlled Component)로 입력을 제어하는 것을 권하지만 react-hook-form 은 비제어 컴포넌트(Uncontrolled Component)가 불필요한 렌더링을 하지 않기 때문에 성능상 우위를 점한다는 점에서 이 방법을 사용

#### **useForm()**

- 해당 훅은 폼을 쉽게 관리하기 위한 커스텀 훅

- mode `( onChange | onBlur | onSubmit | onTouched | all = 'onSubmit')`

  - 이 옵션을 사용하면 어떠한 이벤트가 발생할 때 유효성 검사를 할 것인지 설정

- reValidateMode`(onChange | onBlur | onSubmit = 'onChange')`

  - 기본적으로 유효성 검사는 입력 중에만 발생하는데, 이 옵션을 사용하면 제출(submit) 후 에러가 있는 입력이 다시 검증되는 시기를 설정

- defaultValues

  - 최초 렌더 시, 기본 값을 설정

- resolver : `Yup, Zod, Joi, Superstruct, Vest` 등 외부 유효성 검사 라이브러리와의 통합을 지원

- criteriaMode `( firstError | all )`

  - firstError(기본값)로 설정하면 각 필드의 첫 번째 오류만 수집
  - all로 설정하면 각 필드의 모든 오류가 수집

- shouldFocusError

  - 사용자가 유효성 검사에 실패한 폼을 제출하면 에러가 있는 첫 번째 필드에 포커스가 설정될 지의 여부를 설정

- shouldUnregister

  - 기본적으로 입력 값은 입력이 제거될 때 유지되나 언마운트 될 때 입력을 등록 해제(unregister) 하려면 `shouldUnregister` 를 `true` 로 설정

- delayError

  - 사용자에게 표시되는 에러 상태를 지연시킵니다. (ms)

### **중첩된 컴포넌트 구조에서 FormContext 사용**

- FormContext 는 주로 깊게 중첩된 폼 컴포넌트 구조에서 컨텍스트를 prop 으로 전달하기 어려울 때 사용

### **FormProvider**

- `FormProvider` 는 Provider 로 컨텍스트를 구독하는 컴포넌트들에게 `FormContext 의 변화`를 알리는 역할
- `FormContext` 를 사용하기 위해서는 최상위 컴포넌트를 `FormProvider` 로 감싸주어야 한다.

### **useFormContext()**

- `useFormContext` 는 `FormContext` 에 접근하기 위하여 사용.
- 깊게 중첩된 컴포넌트 구조에서 컨텍스트를 구독하기 위하여 사용.
- `useFormContext` 가 제대로 동작하기 위해선 상위 컴포넌트를 FormProvider로 래핑해야 한다.

### **react-hook-form Validation**

- required (필수값)
- min (최소값)
- max (최대값)
- minLength (최소 길이)
- maxLength (최대 길이)
- pattern (패턴)
- validate (검증하기)

- [ReactHookForm 컴포넌트](ReactHookForm.tsx)
- [NestedForm 컴포넌트](NestedForm.tsx)
- [ValidationForm 컴포넌트](ValidationForm.tsx)
- [Register_1 컴포넌트](Register.tsx)
- [Register_2 컴포넌트](Register2.tsx)
- [ErrorHandleForm 컴포넌트](ErrorHandleForm.tsx)
