import { disassembleChosung, disassembleHangul } from ".";

describe("disassembleHangul", () => {
  it("한글을 자모로 분리합니다", () => {
    expect(disassembleHangul("한글")).toEqual(["ㅎ", "ㅏ", "ㄴ", "ㄱ", "ㅡ", "ㄹ"]);
  });

  it("한글이 아닌 문자는 그대로 반환합니다", () => {
    expect(disassembleHangul("한글abc")).toEqual([
      "ㅎ",
      "ㅏ",
      "ㄴ",
      "ㄱ",
      "ㅡ",
      "ㄹ",
      "a",
      "b",
      "c",
    ]);
  });
});

describe("disassembleChosung", () => {
  it("한글을 초성으로 분리합니다", () => {
    expect(disassembleChosung("한글")).toEqual(["ㅎ", "ㄱ"]);
  });

  it("한글이 아닌 문자는 그대로 반환합니다", () => {
    expect(disassembleChosung("한글abc")).toEqual(["ㅎ", "ㄱ", "a", "b", "c"]);
  });
});
