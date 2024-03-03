import { isValidElement } from "react";
import { Slottable, SlottableProps } from "./Slottable";

export const isSlottable = (
  child: React.ReactNode
): child is React.ReactElement<SlottableProps> => {
  return isValidElement(child) && child.type === Slottable;
};
