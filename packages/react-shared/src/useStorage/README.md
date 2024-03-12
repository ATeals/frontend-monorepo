# useStorage

window의 localStorage, sessionStorage를 간단하게 상태로 사용할 수 있는 훅입니다.

> 🔴 현재 테스트 코드가 없기 때문에 오류가 발생할 수 있습니다.

- 직렬화 가능한 값만 상태로 사용할 수 있습니다.
- ssr환경에서는 초기 값을 할당할 것을 강력히 권장합니다.

## 예시

```tsx
const [state, setState] = useStorage({
  key: "key", // 스토리지에 저장할 key값입니다.
  initial: "initial", // 초기 값입니다. ssr환경에서 필수 입니다.
  type: "local", // localStorage, sessionStorage를 선택할 type입니다.
});
```
