# Switch

선언적으로 컴포넌트를 분기하는 컴포넌트입니다.

## 예시

```tsx
<Switch
  // 현재 분기 상태를 나타내는 값입니다
  value={state}
  // 분기마다 렌더링할 컴포넌트를 선언합니다.
  caseBy={{
    a: <A />,
    b: <B />,
  }}
  // 분기에 없거나 state가 없을경우 렌더링할 기본 컴포넌트 입니다.
  defaultComponent={<Default />}
/>
```
