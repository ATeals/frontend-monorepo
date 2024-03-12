import { SetStateAction } from "react";

export type SerializablePrimitive =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [keys: string]: SerializablePrimitive };

export class StorageEntity<T extends SerializablePrimitive> {
  constructor(private key: string, private storage: globalThis.Storage) {}

  private dispatcEvent() {
    window.dispatchEvent(new StorageEvent("storage"));
  }

  public get get() {
    const snapShot = this.storage.getItem(this.key);
    return snapShot ? JSON.parse(snapShot) : undefined;
  }

  public set(dispatch: SetStateAction<T>) {
    if (typeof dispatch === "function") {
      this.storage.setItem(this.key, JSON.stringify(dispatch(this.get())));
    } else {
      this.storage.setItem(this.key, JSON.stringify(dispatch));
    }
    this.dispatcEvent();
  }
}
