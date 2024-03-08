import { render, fireEvent } from "@testing-library/react";
import { useShortCutKey } from "./useShortCutKey";
import { ShortCutKey } from "./entities";

const TestComponent = ({ shortCutKey }: { shortCutKey: ShortCutKey }) => {
  useShortCutKey(shortCutKey);

  return <></>;
};

describe("useShortCutKey", () => {
  test("단축키에 등록한 모든 키가 눌리면 전달받은 함수를 1번 실행해야 합니다.", () => {
    const MockShortCutKey = {
      keys: ["CTRL", "SHIFT", "A"],
      callbackFn: jest.fn(),
    };

    render(<TestComponent shortCutKey={MockShortCutKey} />);

    fireEvent.keyDown(document, { code: "ControlLeft", key: "Control" });
    fireEvent.keyDown(document, { code: "ShiftLeft", key: "Shift" });
    fireEvent.keyDown(document, { code: "KeyA", key: "a" });

    expect(MockShortCutKey.callbackFn).toHaveBeenCalledTimes(1);
  });

  test("단축키에 등록한 키중 한개라도 눌리지 않는다면 전달받은 함수를 실행하지 않습니다.", () => {
    const MockShortCutKey = {
      keys: ["CTRL", "SHIFT", "A"],
      callbackFn: jest.fn(),
    };

    render(<TestComponent shortCutKey={MockShortCutKey} />);

    fireEvent.keyDown(document, { code: "ControlLeft", key: "Control" });
    fireEvent.keyDown(document, { code: "ShiftLeft", key: "Shift" });

    expect(MockShortCutKey.callbackFn).not.toHaveBeenCalled();
  });
});
