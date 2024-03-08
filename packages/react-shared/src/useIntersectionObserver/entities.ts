import { MutableRefObject } from "react";

export interface IntersectionObserverArgument {
  callbackFn: (entry?: IntersectionObserverEntry) => unknown;
  refs?: Array<MutableRefObject<HTMLElement | null>>;
  options?: IntersectionObserverInit;
}

export class IntersectionObserverEntity {
  private observer;
  constructor({
    callbackFn,
    options: { root, rootMargin, threshold = 0.9 } = {},
  }: IntersectionObserverArgument) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callbackFn(entry);
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );
  }

  public observe(element: HTMLElement) {
    this.observer.observe(element);
  }

  public unobserve(element: HTMLElement) {
    this.observer.unobserve(element);
  }

  public disconnect() {
    this.observer.disconnect();
  }
}
