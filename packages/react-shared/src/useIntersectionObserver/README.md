# useIntersectionObserver

IntersectionObserver API를 React에서 쉽게 사용하기 위한 훅입니다.

```ts
const {
  ref, // IntersectionObserver를 적용할 대상의 ref
  observe, // 새로운 대상을 IntersectionObserver에 추가하는 메소드
  unobserve, // 대상을 IntersectionObserver에서 제거하는 메소드
  cleanUp, // IntersectionObserver의 disconnect 메소드
} = useIntersectionObserver({
  refs: [ref], // IntersectionObserver를 적용할 대상들의 ref
  options: { rootMargin: "0px 0px 100px 0px" }, // IntersectionObserver Options
  callbackFn: (entry) => {}, // 대상이 isInteresting 상태일때 실행할 callback
});
```
