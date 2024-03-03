import { Children, cloneElement, isValidElement } from "react";
import { isSlottable } from "./isSlottable";

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Slot = ({ children, ...props }: SlotProps) => {
  const childrenList = Children.toArray(children);
  const SlottableElement = childrenList.find(isSlottable);

  if (!SlottableElement) {
    if (!isValidElement(children))
      throw new Error("Slot component should have only one React element as a child");

    return cloneElement(children, {
      ...props,
      ...children.props,
    });
  }

  const newElement = SlottableElement.props.children;

  if (!isValidElement(newElement)) {
    throw new Error("Slot component should have only one React element as a child");
  }

  const newChildren = childrenList.map((child) =>
    child !== SlottableElement ? child : newElement.props.children
  );

  return cloneElement(newElement, { ...props, ...newElement.props }, newChildren);
};
