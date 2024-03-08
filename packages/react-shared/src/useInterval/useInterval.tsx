import { useCallback, useEffect, useMemo, useRef } from "react";
import { IntervalEntity } from "./entites";

export const useInterval = (callback: () => unknown, ms?: number) => {
  const ref = useRef<HTMLLegendElement | null>(null);

  const intervalEntity = useMemo(() => new IntervalEntity(callback, ms), [callback, ms]);

  const handleMouseenter = useCallback(() => {
    intervalEntity.onInterval();
  }, [intervalEntity]);

  const handleMouseleave = useCallback(() => {
    intervalEntity.clear();
  }, [intervalEntity]);

  useEffect(() => {
    const Element = ref.current;

    if (Element) {
      Element.addEventListener("mouseenter", handleMouseenter);
      Element.addEventListener("mouseleave", handleMouseleave);
    } else {
      intervalEntity.onInterval();
    }

    return () => {
      intervalEntity.clear();

      if (Element) {
        Element.removeEventListener("mouseenter", handleMouseenter);
        Element.removeEventListener("mouseleave", handleMouseleave);
      }
    };
  }, [handleMouseenter, handleMouseleave, intervalEntity]);

  return { ref };
};
