import { hangulChosungIncludes, hangulIncludes } from ".";

describe("hangulIncludes", () => {
  it("두 한글을 비교해 두번째 한글이 첫번째 한글에 포함되면 true를 반환합니다. (띄어쓰기 준수)", () => {
    expect(
      hangulIncludes("한글이 포함되어 있으면 true를 반환합니다", "한글이 포함되어 있으면")
    ).toBe(true);

    expect(
      hangulIncludes("한글이 포함되어 있으면 true를 반환합니다", "한글이 포함되어 있으면abc")
    ).toBe(false);
  });

  it("한글이 아닌 문자는 그대로 비교합니다.", () => {
    expect(
      hangulIncludes("한글이 포함되어 있으면 true를 반환합니다", "한글이 포함되어 있으면 true")
    ).toBe(true);
  });

  it("checkWhitespace 옵션을 false로 주면 띄어쓰기를 무시합니다.", () => {
    expect(
      hangulIncludes("한글이 포함되어 있으면 true를 반환합니다", "한글이포함되어있으면true", {
        checkWhitespace: false,
      })
    ).toBe(true);
  });
});

describe("hangulChosungIncludes", () => {
  it("두 한글을 비교해 두번째 한글이 첫번째 한글에 초성으로 포함되면 true를 반환합니다.", () => {
    expect(
      hangulChosungIncludes("한글이 포함되어 있으면 true를 반환합니다", "ㅎㄱㅇ ㅍㅎㄷㅇ")
    ).toBe(true);

    expect(
      hangulChosungIncludes("한글이 포함되어 있으면 true를 반환합니다", "ㅎㄱㅇㅍㅎㄷㅇㅁ")
    ).toBe(false);
  });

  it("한글이 아닌 문자는 그대로 비교합니다. (띄어쓰기 준수)", () => {
    expect(
      hangulChosungIncludes(
        "한글이 포함되어 있으면 true를 반환합니다",
        "ㅎㄱㅇ ㅍㅎㄷㅇ ㅇㅇㅁ true"
      )
    ).toBe(true);

    expect(
      hangulChosungIncludes("한글이 포함되어 있으면 true를 반환합니다", "ㅎㄱㅇㅍㅎㄷㅇ ㅇㅇㅁtrue")
    ).toBe(false);
  });

  it("checkWhitespace 옵션을 false로 주면 띄어쓰기를 무시합니다.", () => {
    expect(
      hangulChosungIncludes(
        "한글이 포함되어 있으면 true를 반환합니다",
        "ㅎㄱㅇㅍㅎㄷㅇㅇㅇㅁtrue",
        {
          checkWhitespace: false,
        }
      )
    ).toBe(true);
  });
});
