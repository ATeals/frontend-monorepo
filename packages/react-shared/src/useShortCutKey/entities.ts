import { changeKeytoCode, convertStringArrayToShortcutkeys } from "./utills";

export interface ShortCutKey {
  keys: string[];
  callbackFn: () => unknown;
}

export class ShortCutEntity {
  private keys;
  private callbackFn;
  constructor(ShortCutKey: ShortCutKey) {
    this.keys = convertStringArrayToShortcutkeys(ShortCutKey.keys);
    this.callbackFn = ShortCutKey.callbackFn;
  }

  public clearKeys() {
    for (const key of Object.keys(this.keys)) {
      this.keys[key] = false;
    }
  }

  public callback() {
    this.callbackFn();
  }

  public keyDown(key: string) {
    this.keys[changeKeytoCode(key)] = true;
  }

  public isKeyInShortCut(key: string) {
    return changeKeytoCode(key) in this.keys;
  }

  public get isAllKeyDown() {
    return Object.values(this.keys).every((i) => i);
  }
}
