# useOverlay

Overlay를 다루기 위한 훅

- useOverlay는 OverlayProvider 내부에서 선언되어야 합니다.
- 기본적으로 useOverlay를 선언한 컴포넌트 언마운트시 overlay 컴포넌트도 언마운트 됩니다.

## 예시

```tsx
/**
 * isCloseOnUnmount : useOverlay를 선언한 컴포넌트 언마운트시 overlay 컴포넌트도 언마운트 할지 결정합니다. (기본 true)
 *
 * open : 컴포넌트를 받아 호출시 컴포넌트를 렌더링합니다.
 * close : 렌더링한 overlay 컴포넌트를 언마운트 합니다.
 */
const { open, close } = useOverlay({ isCloseOnUnmount: false });
```
