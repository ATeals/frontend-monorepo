import { renderHook } from "@testing-library/react";
import { useStorage } from "./useStorage";

describe("useStorage", () => {
  it("state와 setState를 반환해야 합니다.", () => {
    const { result } = renderHook(() => useStorage({ key: "test", initial: "" }));
    expect(result.current).toHaveLength(2);
  });
});
