# useInterval

함수를 반복적으로 호출하기 위한 Interval 훅

## 예시

```tsx
/**
 * callback : Interval할 함수
 * ms : 전달한 시간마다 반복 (ms)
 *
 * ref : 대상에 hover시에만 Interval을 수행 (ref로 전달히지 않는다면 마운트시 실행)
 */
const { ref } = useInterval(() => console.log("interval"), 1000);
```
