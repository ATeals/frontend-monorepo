import { getChosung, ishangul, splitHangul } from "./utils";

export const disassembleChosung = (hangul: string) =>
  hangul.split("").map((char) => (ishangul(char) ? getChosung(char) : char));

export const disassembleHangul = (
  hangul: string,
  { isGroupedByCharacter = false }: { isGroupedByCharacter?: boolean } = {}
) => {
  const wordList = hangul.split("");

  return wordList.reduce((list: Array<string | string[]>, word) => {
    if (ishangul(word)) {
      const words = splitHangul(word);
      return isGroupedByCharacter ? [...list, words] : [...list, ...words];
    } else {
      return [...list, word];
    }
  }, []);
};
