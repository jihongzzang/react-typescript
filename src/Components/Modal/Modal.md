### **Modal UI**

#### **모달**

- 달은 기본 창(window) 위에 컴포넌트를 띄우는 방식
- 모달 아래의 창은 비활성 상태(dimmed) 이기 때문에 사용자가 활성된 모달 창 외부의 콘텐츠와 인터페이스 할 수 없다.
- 이 때문에 사용자의 주의 또는 이목을 끌기 위하여 주로 많이 사용되는 기법

#### **포탈 (Portal)**

- 포탈은 외부 DOM 에 엘리먼트를 렌더링하는 방법을 제공
- `ReactDOM.createPortal(child, container)`
- 첫 번째 인자(child)는 엘리먼트, 문자열, 혹은 fragment와 같은 어떤 종류든 렌더링할 수 있는 React 자식. 두 번째 인자(container)는 DOM 엘리먼트

```js
import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.querySelector(selector);

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
```

#### **react-transition-group**

- react-transition-group 은 리액트 컴포넌트에 트랜지션(transition)을 쉽게 줄 수 있는 라이브러리 입니다.
- 컴포넌트가 appear, enter, exit 될 때 적절한 트랜지션을 줄 수 있기 때문에 모달 on & off 시 좀 더 자연스러운 화면 전환 효과를 줄 수 있다.

> CSSTransition

- `CSSTransition` 은 트랜지션의 appear, enter, exit 동안 한 쌍의 클래스 이름을 적용
- 첫 번째 클래스가 적용된 다음 CSS 전환을 활성화하기 위해 두 번째 \*-active 클래스가 적용
- 전환 후에 일치하는 \*-done 클래스 이름이 적용되어 전환 상태를 유지

- [포탈 컴포넌트](./Portal.tsx)
- [Modal UI 컴포넌트](./Modal.tsx)
- [Modal Ui 예제컴포넌트](./ModalExample.tsx)
