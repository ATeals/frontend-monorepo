import { render } from "@testing-library/react";
import { useIntersectionObserver } from ".";

describe("useIntersectionObserver", () => {
  it("ref가 포함된 컴포넌트가 화면에 나타나면 callback을 실행합니다.", () => {
    const callback = jest.fn();

    global.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;

    render(<Component callback={callback} />);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

const Component = ({ callback }: { callback: () => void }) => {
  const { ref } = useIntersectionObserver({ callbackFn: callback });

  return <div ref={ref}></div>;
};

class MockIntersectionObserver {
  private callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe = (target?: HTMLElement) => {
    const entry: IntersectionObserverEntry = {
      isIntersecting: true,
      boundingClientRect: {} as DOMRectReadOnly,
      intersectionRatio: 1,
      intersectionRect: {} as DOMRectReadOnly,
      rootBounds: null,
      target: target as HTMLElement,
      time: 0,
    };

    this.callback([entry], {} as IntersectionObserver);
  };

  disconnect = () => {};

  unobserve = () => {};
}
