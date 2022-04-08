### **Skeleton UI**

#### **스켈레톤이란?**

- 웹 페이지에서 로드 시간이 짧은 것처럼 보이게 하는 몇 가지 방법중에 하나
- 스켈레톤은 그 방법 중에 하나로서 데이터가 로드되기 전에 콘텐츠의 자리비움(placholder)- 를 표시해서 사용자가 기다리는 시간을 좀 덜 지루하게 느끼게끔 하는 UI

#### **장점**

- 아래의 표는 80명의 참가자를 대상으로 스켈레톤, 스피너, 블랭크 화면을 보여주며 테스트 했을 때 인지된 로딩 시간을 보여 준다

- 결과적으로 블랭크 `페이지` < `스피너` < `스켈레톤` 순서대로 더 빠르다고 느낀다.

<img src="https://1407997992-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MifTQJFmxgqol6NPgFW%2F-MifUf6rnH7SmHVIu8pl%2F-MifX-i915TyKciGhCE8%2Fimage.png?alt=media&token=aae97582-4efd-4fc8-9269-ebe5b9edb20c"/>

#### **단점**

- 아무래도 스켈레톤을 화면마다 표시해야 되기 때문에 상대적으로 시간이나 비용이 많이 든다.

### **더 나은 경험을 위한 스켈레톤규칙**

- 스켈레톤은 콘텐츠의 로드를 방해하면 안된다. 당연한 얘기지만 실제 콘텐츠는 데이터를 가용할 수 있는 시점이 되면 즉시 스켈레톤을 대체해야 한다.
- 스켈레톤을 디자인 할 때 애니메이션을 사용하는 것이 좋다.
- 애니메이션은 wave, pulse 중 wave 를 사용하는 것이 로딩 시간을 더 짧게 느끼게 함
- 느리고 안정적인 애니메이션을 사용하는 것이 로딩 시간을 더 짧게 느끼게 함.

- [Skeleton UI 컴포넌트](./Skeleton.tsx)
- [Skeleton UI 예제코드](./ExampleSkeleton.tsx)