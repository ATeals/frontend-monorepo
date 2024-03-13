import { disassembleChosung, disassembleHangul } from "./disassembleHangul";

export const hangulIncludes = (
  word: string,
  searchword: string,
  { checkWhitespace = true }: { checkWhitespace?: boolean } = {}
) => {
  const disassembled = disassembleHangul(word).join("");
  const searchDisassembled = disassembleHangul(searchword).join("");

  return checkWhitespace
    ? disassembled.includes(searchDisassembled)
    : disassembled.replace(/\s/g, "").includes(searchDisassembled.replace(/\s/g, ""));
};

export const hangulChosungIncludes = (
  word: string,
  searchword: string,
  { checkWhitespace = true }: { checkWhitespace?: boolean } = {}
) => {
  const disassembled = disassembleChosung(word).join("");
  const searchDisassembled = disassembleChosung(searchword).join("");

  return checkWhitespace
    ? disassembled.includes(searchDisassembled)
    : disassembled.replace(/\s/g, "").includes(searchDisassembled.replace(/\s/g, ""));
};
