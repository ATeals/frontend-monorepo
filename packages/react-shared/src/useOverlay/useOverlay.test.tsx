import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { OverlayProvider, useOverlay } from ".";
import { useEffect } from "react";

describe("useOverlay", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("OverlayProvider 내에서만 사용할 수 있어야 한다.", () => {
    expect(() => renderHook(() => useOverlay())).toThrow();
  });

  it("open, close 함수를 반환해야 한다.", () => {
    const { result } = renderHook(() => useOverlay(), {
      wrapper: ({ children }) => <OverlayProvider>{children}</OverlayProvider>,
    });

    expect(result.current).toHaveProperty("open");
    expect(result.current).toHaveProperty("close");
  });

  it("open 함수를 호출하면 인자로 받은 Element가 렌더링 되어야 한다.", () => {
    const OverlayComponent = () => {
      const { open } = useOverlay();

      open(<div role="overlay">test</div>);

      return <></>;
    };

    render(
      <OverlayProvider>
        <OverlayComponent />
      </OverlayProvider>
    );

    const overlay = screen.getByRole("overlay");

    expect(overlay).toBeInTheDocument();
  });

  it("close 함수를 호출하면 렌더링 된 Element를 unmount 해야한다.", () => {
    const OverlayComponent = () => {
      const { open, close } = useOverlay();

      useEffect(() => {
        open(<div role="overlay">test</div>);

        setTimeout(() => {
          close();
        }, 300);
      }, [open, close]);

      return <></>;
    };

    render(
      <OverlayProvider>
        <OverlayComponent />
      </OverlayProvider>
    );

    const overlay = screen.getByRole("overlay");

    waitFor(() => {
      expect(overlay).not.toBeInTheDocument();
    });
  });
});
