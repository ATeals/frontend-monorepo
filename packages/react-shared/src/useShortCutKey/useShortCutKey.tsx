import { useCallback, useLayoutEffect, useMemo } from "react";
import { ShortCutEntity, ShortCutKey } from "./entities";

export const useShortCutKey = (ShortCutKey: ShortCutKey) => {
  const ShortCut = useMemo(() => new ShortCutEntity(ShortCutKey), [ShortCutKey]);

  const handleKeyUp = useCallback(() => {
    ShortCut.clearKeys();
  }, [ShortCut]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (ShortCut.isKeyInShortCut(e.code)) {
        ShortCut.keyDown(e.code);
      }

      if (ShortCut.isAllKeyDown) {
        ShortCut.callback();
        ShortCut.clearKeys();
      }
    },
    [ShortCut]
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
