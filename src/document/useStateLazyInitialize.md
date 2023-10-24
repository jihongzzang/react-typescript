### 게으른 초기화

<a href="https://reactjs.org/docs/hooks-reference.html#lazy-initial-state">공식문서 보러가기</a>

### 예제 코드

```js
const [keyword, setKeyword] = useState(() => {
  return window.localStorage.getItem('keyword');
});
```

```js
const [keyword, setKeyword] = useState(window.localStorage.getItem('keyword'));
```

### 두 코드의 차이

- 두개의 코드의 차이는 `useState` 변수를 직접 넣는가와 즉시실행 화살표 함수를 넣는지에 차이가 있다.

### Lazy initial state

- `useState`에 직접적인 값 대신에 함수를 넘기는 것을 게으른 초기화(Lazy initial state)라고 한다.

### 언제 사용하는가

- 공식 문서에 따르면 이러한 게으른 초기화를 초기 값이 복잡한 연산을 포함할 때 사용하라고 명시되어 있음. `state`내부에 함수는 `state`가 처음 만들어질때만 실행되고, 이후 리렌더링이 된다면, 함수의 실행은 무시된다.

### 실행순서적인 측면에서

> - `useState`의 초기값은 처음 렌더링 될 때 사용되며, 이는 `keyword`의 초기값을 만든다. `setKeyword` 함수가 실행되면, 전체 함수가 다시 실행되며, `keyword`의 값을 업데이트 한다.
> - 따라서, 리렌더링이 발생할 때 마다 로컬스토리지의 값을 읽어오지만, 연산이 복잡한 초기값은 최초 렌더링시에만 해당 값이 필요하므로, 이는 필요없는 연산을 계속해서 하게 되는 것이다.

### 단점

- 비록 초기값을 설정하는 함수가 게으른 초기화로 인해 한번만 호출되지만, 여전히 함수를 만드는 비용이 존재한다. 그리고 함수를 만드는 비용이 보통 변수를 생성하거나 단순히 값을 넘기는 비용보다는 크다.

### 게으른 초기값을 사용해야 하는 자세한 상황

- 앞선 예와 같이 `localStorage`의 접근, `map`, `filter`, `find` 등의 배열을 조작하는 것들이 그 예가 될 수 있다. 일반적으로, 함수를 통해서 값을 초기값을 설정해야 한다면 게으른 초기화를 하는게 좋을 수도 있다.
