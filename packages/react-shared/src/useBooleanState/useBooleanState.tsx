import { useState } from "react";

interface UseBooleanStateActions {
  toggle: () => unknown;
  setTrue: () => unknown;
  setFalse: () => unknown;
}

export const useBooleanState = (
  initialvalue: boolean = false
): [boolean, UseBooleanStateActions] => {
  const [bool, setBool] = useState(initialvalue);

  const toggle = () => setBool((bool) => !bool);

  const setTrue = () => setBool(true);

  const setFalse = () => setBool(false);

  const actions = { toggle, setTrue, setFalse };

  return [bool, actions];
};
