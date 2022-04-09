### **Infinite Scroll InterSection Observer**

#### **Intersection Observer**

- Intersection Observer 는 브라우저 뷰포트(Viewport) 와 설정한 엘리먼트 (Element) 의 교차 영역을 관찰하고 요소가 뷰포트와의 겹치는 영역이 있는지를 구별하는 기능을 제공.
- new IntersectionObserver 생성자 함수로 생성한 인스턴스로 관찰자 (Observer) 를 초기화하고 인수로 콜백(Callback) 과 옵션을 가짐.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">공식문서</a>

```js
const observer = new IntersectionObserver(callback, options);
observer.observe(targetElement);
```

#### **Callback**

- 관찰 대상이 등록되거나 가시성의 변화가 생기면 관찰자는 콜백을 실행
- 콜백 함수는 entries, observer 를 인수로 받음

```js
interface IntersectionObserverCallback {
  (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}
```

#### entries

- IntersectionObserver 인스턴스의 배열입니다.

```js
interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: number;
}
```

#### IntersectionObserverEntry 의 속성

- boundingClientRect
  - 관찰 대상 엘리먼트의 크기 (width, height) 와 위치 (top, left, right, bottom) 정보를 나타냄
- intersectionRect
  - 관찰 대상 엘리먼트와 루트가 겹치는 영역에 대한 크기 (width, height) 와 위치 (top, left, right, bottom) 정보를 나타냄
- intersectionRatio
  - 관찰 대상 엘리먼트가 루트와 얼마나 영역이 겹치는지에 대한 수치를 나타냄
- isIntersecting
  - 관찰 대상 엘리먼트가 루트와 영역이 겹치는지 여부를 나타냄
- rootBounds
  - 루트에 대한 크기 (width, height) 와 위치 (top, left, right, bottom) 정보를 나타냄
- target
  - 관찰 대상 엘리먼트에 대한 정보를 나타냄
- time
  - 영역이 겹치는 지의 여부 (isIntersecting) 이 변경된 시간을 나타냄

#### observer

- 콜백이 실행되는 해당 인스턴스를 참조합니다.

```js
interface IntersectionObserver {
    readonly root: Element | Document | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}
```

#### **옵션 (Options)**

```js
interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}
```

- root
  - 관찰 대상 엘리먼트를 판단하기 위해 뷰포트 대신 사용할 루트 요소를 지정, null 인 경우 브라우저의 뷰포트가 기본적으로 사용
- rootMargin
  - margin 을 이용해서 root 범위를 확장하거나 축소. 0px 0px 0px 0px 이 기본
- threshold
  - 옵저버의 콜백 함수가 실행되기 위해 관찰 대상 엘리먼트와의 겹치는 영역이 얼마나 필요한지 백분율로 표시. ex ) 0.5 : 관찰 대상 엘리먼트가 루트와 50% 겹칠 때 옵저버가 실행

#### **관찰자 메소드 (methods of observer)**

- observe()

  - 관찰 대상의 관찰을 시작

- unobserve()

  - 관찰 대상의 관찰을 중지

- disconnect()

  - intersectionObserver 인스턴스들의 모든 관찰을 중지

- [Infinite Ui 훅](/src/hooks/useIntersectionObserver.ts)
- [Infinite Ui 컴포넌트](InfiniteScroll2.tsx)
