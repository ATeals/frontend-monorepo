import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ErrorBoundary, useErrorBoundary } from ".";
import { useEffect } from "react";

describe("ErrorBoundary", () => {
  const ErrorComponent = () => {
    useEffect(() => {
      throw new Error("Oh no");
    }, []);

    return <></>;
  };

  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => null);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("children에서 throw한 에러를 캐치합니다.", () => {
    expect(() =>
      render(
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>
      )
    ).toThrow();
  });

  test("fallback이 존재하면 에러를 캐치한 뒤 fallback을 랜더링 합니다.", () => {
    render(
      <ErrorBoundary fallback={<div>error</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    const errorText = screen.getByText("error");

    expect(errorText).toBeInTheDocument();
  });

  test("onError가 존재하면 에러를 캐치한 뒤 onError를 실행합니다.", () => {
    const callback = jest.fn();

    render(
      <ErrorBoundary onError={callback} fallback={<div>error</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(callback).toHaveBeenCalled();
  });

  describe("useErrorBoundary를 사용하면 ErrorBoundary가 캐치할 수 있는 에러를 throw할 수 있습니다.", () => {
    test("Event에서 throw 한 뒤 catch할 수 있습니다.", () => {
      const EventErrorComponent = () => {
        const throwError = useErrorBoundary();
        return (
          <button role="button" onClick={() => throwError(new Error("error"))}>
            error
          </button>
        );
      };

      render(
        <ErrorBoundary fallback={<>Error!</>}>
          <EventErrorComponent />
        </ErrorBoundary>
      );

      fireEvent.click(screen.getByRole("button"));

      const errorMessage = screen.getByText("Error!");

      expect(errorMessage).toBeInTheDocument();
    });

    test("async에서 throw 한 뒤 catch할 수 있습니다.", () => {
      const AsyncErrorComponent = () => {
        const throwError = useErrorBoundary();

        setTimeout(() => {
          throwError(new Error("error"));
        }, 0);

        return <></>;
      };

      render(
        <ErrorBoundary fallback={<>Error!</>}>
          <AsyncErrorComponent />
        </ErrorBoundary>
      );

      waitFor(() => {
        const errorMessage = screen.getByText("Error!");
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
