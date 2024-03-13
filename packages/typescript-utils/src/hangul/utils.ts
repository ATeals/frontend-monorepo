import { HANGUL_MAP } from "./const";

export const isHangul = (word: string) => /[\uAC00-\uD7A3]/g.test(word);

export const getChosung = (hangul: string) => splitHangul(hangul)[0];

export const splitHangul = (hangul: string) => {
  const word = hangul.charCodeAt(0) - 0xac00;
  const last = word % 28;
  const middle = ((word - last) / 28) % 21;
  const first = ((word - last) / 28 - middle) / 21;

  return [HANGUL_MAP.Cho[first], HANGUL_MAP.Jung[middle], HANGUL_MAP.Jong[last]].filter(
    (char) => char !== ""
  );
};
