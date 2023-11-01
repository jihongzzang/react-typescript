### 최근 공부한 주제

- Hooks
- Composition
- HOC
- Memoization
- Context
- Portals
- PropTypes
- Reconciliation

### 주제에 대한 내용

### Hooks

```
- Hooks 등장 => Class의 단점 보완 / 재사용성 강화
- Hook 사용 규칙 => 최상위 / 함수형 컴포넌트 / custom Hook
- useEffect => 데이터 fetch / 구독 / Dom 수정
- clean up => 구독과 구독해지를 한 공간에서 가능
- dependency array => 변경이 필요한 시점에만 effect 실행
- Custom Hook => 컴포넌트들에 반복되는 Hooks 묶기
- 다양한 Hooks => 필요한 타이밍에 참고해서 사용
```

### Composition

```
- composition => 컴포넌트 내부에 컴포넌트 합성
- 담는 방법 => Children / Custom
- 확장성 => 다양한 상황에서 확장이 가능
```

### HOC

```
- 고차컴포넌트 => 함수를 받아서 함수를 리턴한다.
```

### Memoization

```
- React.memo => HOC / Props 비교하여 메모이제이션
- Profiler => 리액트 성능 분석 도구
- useCallback => 함수를 메모이제이션 하고 싶을때 사용
- useMemo => value를 메모이제이션 하고싶을때 사용
```

### Context

```
- 컴포넌트 트리 제약 => Props drilling의 한계 해소
- 재사용성 => Context를 사용하면 재사용성에 대해 고민해봐야함
- API => createContext / Provider / Consumer
- useConetext => Consumer 대체
```

### Portals

```
- createPortal => 부모 컴포넌트 DOM 트리로 부터 벗어나기
- event => Portal에 있더라도 Event는 트리로 전파가능
```

### PropTypes

```
- 개발 모드에서만 동작 => 유효하지 않은 prop에 대한 경고
- custom => RegExp 등으로 사용자 정의 가능
- children 제한 => 원래는 제약이 없던 개수도 제약 가능
```

### Reconciliation

```
- 루트부터 비교 => 무엇을 렌더링할 지 알려주는 함수
- 트리를 파괴 => 부모가 바뀌었다면 트리를 버림
- Keys => 자식 재귀 처리 시 효율성 확보
- Virtual DOM => 실제 DOM과 동기화 할 가상 표현
- 재조정 => 실제 DOM과 Virtual DOM의 동기화
```
