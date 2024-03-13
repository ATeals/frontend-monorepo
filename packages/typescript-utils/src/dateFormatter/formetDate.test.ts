import { formatDate } from ".";

describe("formatDate", () => {
  it("날짜를 포맷팅한 문자열로 반환합니다.", () => {
    expect(formatDate(new Date("2024-03-02"), "YYYY/MM/DD")).toBe("2024/03/02");
    expect(formatDate(new Date("2024-03-02"), "YYYY.MM.DD")).toBe("2024.03.02");
    expect(formatDate(new Date("2024-03-02"), "YYMMDD")).toBe("240302");
    expect(formatDate(new Date("2024-03-02"), "YYYY년 MM월 DD일")).toBe("2024년03월02일");
  });
});
