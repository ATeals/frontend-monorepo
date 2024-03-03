import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";
import { CSSProperties } from "react";
import { FlexStyles, getFlexStyles } from "./Flex.styles";

type FlexProps = {
  style?: FlexStyles & Omit<CSSProperties, "direction">;
};

export const Flex = <T extends React.ElementType = "div">({
  as,
  style = {},
  ...props
}: PolymorphicComponentProps<T, FlexProps>) => {
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
