import { render, screen } from "@testing-library/react";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("value에 맞는 컴포넌트를 렌더링 합니다.", () => {
    const cases = {
      case1: <div>Case 1</div>,
      case2: <div>Case 2</div>,
      case3: <div>Case 3</div>,
    };

    render(<Switch value="case2" caseBy={cases} defaultComponent={<div>Default Case</div>} />);

    expect(screen.getByText("Case 2")).toBeInTheDocument();
  });

  it("value가 없으면 defaultComponent를 렌더링 합니다.", () => {
    const cases = {
      case1: <div>Case 1</div>,
      case2: <div>Case 2</div>,
      case3: <div>Case 3</div>,
    };

    render(<Switch caseBy={cases} defaultComponent={<div>Default Case</div>} />);

    expect(screen.getByText("Default Case")).toBeInTheDocument();
  });
});
