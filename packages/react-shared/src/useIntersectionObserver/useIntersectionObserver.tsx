import { useEffect, useRef } from "react";
import { IntersectionObserverArgument, IntersectionObserverEntity } from "./entities";

export const useIntersectionObserver = ({
  callbackFn,
  options,
  refs,
}: IntersectionObserverArgument) => {
  const element = useRef(null);

  const observer = useRef(new IntersectionObserverEntity({ options, callbackFn }));

  const cleanUp = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    if (refs) refs.forEach((ref) => ref.current && observer.current.observe(ref.current));
    if (element.current) observer.current.observe(element.current);

    return () => cleanUp();
  }, [refs]);

  return {
    ref: element,
    observe: observer.current.observe,
    unobserve: observer.current.unobserve,
    cleanUp,
  };
};
