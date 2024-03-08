import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useInterval } from "./useInterval";

jest.useFakeTimers();

describe("useInterval", () => {
  test("ref가 없을때 useInterval을 선언한 컴포넌트 마운트시 'ms' 마다 'callback'을 실행합니다.", () => {
    const callback = jest.fn();
    render(<Component callback={callback} ms={100} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(10);
  });

  test("ref가 있을때 ref를 부여한 요소에 mouseEnter이벤트 발생 시 'ms' 마다 'callback'을 실행합니다. mouseLeave 발생시 interval을 종료합니다.", () => {
    const callback = jest.fn();
    const { getByTestId } = render(<RefComponent callback={callback} ms={100} />);

    const divElement = getByTestId("ref");

    act(() => {
      fireEvent.mouseEnter(divElement);
      jest.advanceTimersByTime(1000);
      fireEvent.mouseLeave(divElement);
      jest.advanceTimersByTime(1000);
    });

    expect(callback).toHaveBeenCalledTimes(10);
  });

  test("ref가 있을때  ref를 부여한 요소에 mouseEnter이벤트가 발생하지 않으면 interval하지 않습니다.", () => {
    const callback = jest.fn();
    render(<RefComponent callback={callback} ms={100} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(callback).not.toHaveBeenCalled();
  });
});

const Component = ({ callback, ms }: { callback: () => void; ms: number }) => {
  useInterval(callback, ms);
  return <></>;
};

const RefComponent = ({ callback, ms }: { callback: () => void; ms: number }) => {
  const { ref } = useInterval(callback, ms);

  return <div ref={ref} data-testid="ref"></div>;
};
