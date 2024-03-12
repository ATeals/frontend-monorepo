# useShortCutKey

단축키를 지정하는 훅입니다.

useShortCutKey를 선언한 컴포넌트 마운트 시 제공한 단축키를 사용해 함수를 호출할 수 있습니다.

## 예시

```tsx
useShortCutKey({
  keys: ["ctrl", "a"], // 단축키를 선언합니다.
  callbackFn: () => console.log("ctrl + a"), // 단축키가 눌렸을 때 호출할 함수입니다.
});
```
