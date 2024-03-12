# ErrorBoundary

선언적으로 컴포넌트의 에러를 관리하는 컴포넌트입니다.

## 예시

```tsx
<ErrorBoundary
  //에러가 발생했을때 호출되는 함수입니다.
  onError={() => alert("에러 발생")}
  /**
   * 에러가 발생했을때 렌더링 되는 컴포넌트 입니다.
   * 일반 컴포넌트 또는 아래에 언급하는 Prop을 사용하는 컴포넌트를 전달 받습니다.
   * error : 발생한 Error 객체입니다.
   * errorInfo : 예외를 포함한 컴포넌트와 그 조상들을 기록한 값입니다.
   * resetError : 트리거시 ErrorBoundary의 isError 상태를 초기화 합니다.
   */
  fallback={({ error, errorInfo, resetError }) => <div>Error!</div>}
>
  <Component />
</ErrorBoundary>
```

# useErrorBoundary

이벤트 핸들러에서 발생한 이벤트나 비동기에서 발생한 이벤트 등, ErrorBoundary가 catch 하지 못하는 error를 throw하는 훅입니다.

가장 인접한 ErrorBoundary에 에러를 throw합니다.

```tsx
const ErrorComponent = () => {
  const throwError = useErrorBoundary();

  return <button onClick={() => throwError(new Error("Error"))}>throw</button>;
};
```
