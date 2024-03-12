import { createContext, useContext, useEffect, useMemo, useRef } from "react";

interface OverlayContextValue {
  id?: string;
  mount?: (id: string, overlay: React.ReactNode) => unknown;
  unmount?: (id: string) => unknown;
}

export const OverlayContext = createContext<OverlayContextValue>({});

const useOverlayContext = () => {
  const { mount, unmount } = useContext(OverlayContext);

  const InvalidContext = !(mount && unmount);

  if (InvalidContext) {
    throw new Error("useOverlay는 OverlayProvider 내에서만 사용할 수 있습니다.");
  }

  return useMemo(() => ({ mount, unmount }), [mount, unmount]);
};

const uniqueId = () => Date.now().toString() + Math.random().toString();

const useUniqueIdRef = () => {
  const id = useRef(uniqueId()).current;
  return id;
};

export const useOverlay = ({ isCloseOnUnmount = true }: { isCloseOnUnmount?: boolean } = {}) => {
  const { mount, unmount } = useOverlayContext();
  const id = useUniqueIdRef();

  useEffect(() => {
    return () => {
      if (isCloseOnUnmount) unmount(id);
    };
  }, [id, unmount, isCloseOnUnmount]);

  return useMemo(
    () => ({ open: (element: React.ReactNode) => mount(id, element), close: () => unmount(id) }),
    [id, mount, unmount]
  );
};
