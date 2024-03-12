import { useEffect, useRef } from "react";
import { IntersectionObserverArgument, IntersectionObserverEntity } from "./entities";

/**
 * IntersectionObserver API를 React에서 쉽게 사용하기 위한 훅입니다.

 * 
 * @param {
 * **callbackFn** : entry가 isIntersecting이 되었을 때 실행할 콜백함수
 * 
 * **options** : IntersectionObserver의 옵션
 * 
 * **refs** : IntersectionObserver를 적용할 대상의 ref
 * }
 * 
 * @return {
 * ref : IntersectionObserver를 적용할 대상의 ref
 * 
 * **observe** : 새로 추가된 대상을 IntersectionObserver에 추가하는 메소드
 * 
 * **unobserve** : 대상을 IntersectionObserver에서 제거하는 메소드
 * 
 * **cleanUp** : IntersectionObserver의 disconnect 메소드
 * }
 */
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
