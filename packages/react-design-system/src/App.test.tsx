import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App test", () => {
  test("App 컴포넌트는 세상과 마주했습니다.", () => {
    render(<App />);

    const helloText = screen.getByText("hello world");

    expect(helloText).toBeInTheDocument();
  });
});
