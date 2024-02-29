import { generateClassName } from "@/utils/generateClassName";
import { CSSProperties } from "react";
import { FlexStyles, getFlexStyles } from "./Flex.styles";

type FlexProps<T extends React.ElementType> = {
  style?: FlexStyles & Omit<CSSProperties, "direction">;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "style">;

export const Flex = <T extends React.ElementType = "div">({
  as,
  style = {},
  ...props
}: FlexProps<T>) => {
  const Element = as || "div";

  const tailwind = generateClassName("flex", props.className);

  return (
    <Element
      className={tailwind}
      style={{
        ...getFlexStyles(style),
      }}
      {...props}
    >
      {props.children}
    </Element>
  );
};
