### 최근 공부한 주제

- props
- component Life Cycle
- event
- conditional Rendering
- list
- form

### 주제에 대한 내용

#### props

```
- Props => 컴포넌트에 전달되는 단일객체
- 순수함수 처럼 동작 => props자체 수정 불가
- 컴포넌트 합성 (Composition) => 여러 컴포넌트 들을 모아서
- 컴포넌트 추출 (Extraction) => 여러곳에서 사용되거나 복잡한경우
```

#### component Life Cycle

```
- constructor => state 초기화 및 메서드 바인딩
- componentDidMount => Dom 노드 초기화 및 데이터 fetch
- componentDidMount => 타이머 제거 및 요청 취소 및 구독 해제
- Functional Component => hook으로 대부분 구현 가능
```

#### event

```
- 합성 이벤트 => 인터페이스는 같지만 직접 대응되지 않음
- Bubble / Capture => Capture > target > Bubble 순서로 일어남
- return false => 리액트에서는 e.preventDefault()
```

#### conditional Rendering

```
- if => if(condition){return A} else {return B}
- && => condition && A, falsy 값 주의
- 삼항연산자 => condition ? A : B
- 아예 그리지 않고 싶을 때 => return null;
```

#### list

```
- map => 배열의 개별 요소를 순회
- default key => initial value로 index를 사용하나 index를 사용할 경우 재 배치나 순서에 변화가 생겼을때 문제가 발생될 여지가 있다.
- 고유성 => 형제 사이에서만 고유하면 됨
- key props => key는 props로 전달 불가능
```

#### form

```
- Controlled Component => input value를 state로 관리
- multiple input => event.target.name 활용
- Uncontrolled Component => form element 자체 내부 상태 활용
- defaultValue, ref => 기본값 / value 확인
```
