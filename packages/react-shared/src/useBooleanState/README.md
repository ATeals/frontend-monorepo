# useBooleanState

boolean 형식에 상태를 쉽게 사용하기 위한 컴포넌트 입니다.

```ts
/**
 * initialvalue : 기본값을 지정할 수 있습니다. (기본 false)
 * bool : 현재 boolean 상태입니다.
 * action
 * setTrue : 상태를 true로 변경합니다.
 * setFalse : 상태를 false로 변경합니다.
 * toggle : 상태를 이전 값의 반대로 변경합니다.
 */
const [bool, { setTrue, setFalse, toggle }] = useBooleanState(false);
```
