import { SetStateAction, useSyncExternalStore } from "react";
import { SerializablePrimitive, StorageEntity } from "./entites";

const subscribe = (listener: () => void) => {
  if (typeof window === "undefined")
    return () => {
      listener();
      return () => listener();
    };
  window?.addEventListener("storage", listener);
  return () => window?.removeEventListener("storage", listener);
};

export const useStorage = <T extends SerializablePrimitive>({
  key,
  type = "local",
  initial,
}: {
  key: string;
  type?: "local" | "session";
  initial?: T;
}) => {
  const isWindow = typeof window !== "undefined";

  const storage = isWindow
    ? new StorageEntity<T>(key, type === "local" ? window.localStorage : window.sessionStorage)
    : {
        get: initial,
        set: () => {},
      };

  const getServersideSnapshot = () => initial;

  const state = useSyncExternalStore<T | undefined>(
    subscribe,
    () => storage.get,
    getServersideSnapshot
  );

  const setStorage = (dispatch: SetStateAction<T>) => storage.set(dispatch);

  return [state, setStorage] as const;
};
