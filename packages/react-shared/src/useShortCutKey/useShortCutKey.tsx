import { useCallback, useLayoutEffect, useMemo } from "react";
import { changeKeytoCode } from "./utills";

export interface ShortCutKey {
  keys: string[];
  callbackFn: () => unknown;
}

export const useShortCutKey = (ShortCutKey: ShortCutKey) => {
  const KeyMap = useMemo(
    () => ({
      keys: ShortCutKey.keys.reduce(
        (a: { [key: string]: boolean }, c) => ({
          ...a,
          [changeKeytoCode(c)]: false,
        }),
        {}
      ),
      callbackFn: ShortCutKey.callbackFn,
    }),
    [ShortCutKey]
  );

  const handleKeyUp = useCallback(() => {
    for (const key of Object.keys(KeyMap.keys)) {
      KeyMap.keys[key] = false;
    }
  }, [KeyMap]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = changeKeytoCode(e.code);
      if (key in KeyMap.keys) {
        KeyMap.keys[changeKeytoCode(key)] = true;
      }

      if (Object.values(KeyMap.keys).every((i) => i)) {
        KeyMap.callbackFn();
        handleKeyUp();
      }
    },
    [KeyMap, handleKeyUp]
  );

  useLayoutEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);
};
