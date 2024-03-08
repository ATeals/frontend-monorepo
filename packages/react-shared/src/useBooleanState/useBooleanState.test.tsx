import { renderHook } from "@testing-library/react";
import { useBooleanState } from "./useBooleanState";
import { act } from "react-dom/test-utils";

describe("useBooleanState", () => {
  test("boolean type state와 action을 반환해야합니다.", () => {
    const {
      result: {
        current: [bool, { toggle, setTrue, setFalse }],
      },
    } = renderHook(() => useBooleanState(true));

    expect(typeof bool).toBe("boolean");
    expect(typeof toggle).toBe("function");
    expect(typeof setTrue).toBe("function");
    expect(typeof setFalse).toBe("function");
  });

  test("초기 값이 없다면 초기 state는 false입니다.", () => {
    const {
      result: {
        current: [bool],
      },
    } = renderHook(() => useBooleanState());

    expect(bool).toBe(false);
  });

  test("초기 값을 할당하면 초기 state는 할당한 초기 값입니다.", () => {
    const {
      result: {
        current: [bool],
      },
    } = renderHook(() => useBooleanState(true));

    expect(bool).toBe(true);
  });

  test("action.setTrue 실행시 현재 state를 true로 변경합니다.", () => {
    const { result } = renderHook(() => useBooleanState(false));

    const [, { setTrue }] = result.current;

    act(() => {
      setTrue();
    });

    const [bool] = result.current;

    expect(bool).toBe(true);
  });

  test("action.setFalse 실행시 현재 state를 false로 변경합니다.", () => {
    const { result } = renderHook(() => useBooleanState(true));

    const [, { setFalse }] = result.current;

    act(() => {
      setFalse();
    });

    const [bool] = result.current;

    expect(bool).toBe(false);
  });

  test("action.toggle 실행시 현재 state의 boolean값을 거짓일 경우 참, 참일 경우 거짓으로 변경합니다.", () => {
    const { result } = renderHook(() => useBooleanState(false));

    const [, { toggle }] = result.current;

    act(() => {
      toggle();
    });

    const [bool1] = result.current;

    expect(bool1).toBe(true);

    act(() => {
      toggle();
    });

    const [bool2] = result.current;

    expect(bool2).toBe(false);
  });
});
