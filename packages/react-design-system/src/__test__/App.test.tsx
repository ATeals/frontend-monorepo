import { render, screen } from "@testing-library/react";
import App from "../App";

test("", () => {
  render(<App />);

  const text = screen.getByText("hello world");

  expect(text).toBeInTheDocument();
});
