import { elapsedTime } from ".";

describe("elapsedTime", () => {
  it("경과한 시간을 포맷팅한 문자열로 반환합니다.", () => {
    expect(elapsedTime(new Date())).toBe("방금 전");
    expect(elapsedTime({ start: new Date("2020-03-02"), end: new Date("2024-03-02") })).toBe(
      "4년 전"
    );
  });

  it("시작 날짜가 종료 날짜보다 미래일 수 없습니다.", () => {
    expect(() =>
      elapsedTime({ start: new Date("2024-03-02"), end: new Date("2020-03-02") })
    ).toThrow();
  });
});
