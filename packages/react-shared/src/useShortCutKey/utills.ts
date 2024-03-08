export const modifierKeys = {
  CMD: "META",
  ALT: "ALT",
  SHIFT: "SHIFT",
  CTRL: "CONTROL",
  OPTION: "ALT",
  META: "META",
};

export const specialCharacterMap = {
  BACKQUOTE: "`",
  MINUS: "-",
  EQUAL: "=",
  BRACKETLEFT: "[",
  BRACKETRIGHT: "]",
  BACKSLASH: "\\",
  SEMICOLON: ";",
  QUOTE: "'",
  COMMA: ",",
  PERIOD: ".",
  SLASH: "/",
  INTLBACKSLASH: "\\",
  INTLRO: "¥",
  NUMPADDIVIDE: "/",
  NUMPADMULTIPLY: "*",
  NUMPADSUBTRACT: "-",
  NUMPADADD: "+",
  NUMPADDECIMAL: ".",
};

export const isModifierKey = (key: string): key is keyof typeof modifierKeys => {
  return key in modifierKeys;
};

export const isSpecialCharacter = (key: string): key is keyof typeof specialCharacterMap => {
  return key in specialCharacterMap;
};

export const changeKeytoCode = (key: string) => {
  key = key
    .toUpperCase()
    .replace("LEFT", "")
    .replace("RIGHT", "")
    .replace("KEY", "")
    .replace("DIGIT", "");

  return isSpecialCharacter(key)
    ? specialCharacterMap[key]
    : isModifierKey(key)
    ? modifierKeys[key]
    : key;
};

export const convertStringArrayToShortcutkeys = (strings: string[]) => {
  return strings.reduce(
    (a: { [key: string]: boolean }, c) => ({
      ...a,
      [changeKeytoCode(c)]: false,
    }),
    {}
  );
};
