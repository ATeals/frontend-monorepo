import { generateClassName } from "@/utils/generateClassName";
import { GridContainerStyles, getGridContainerStyles } from "./GridContainer.styles";
import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { AsChildProps, Slot } from "@/common/Slot";

type GridContainerProps = {
  style?: GridContainerStyles & React.CSSProperties;
} & AsChildProps;

export const GridContainer = <T extends React.ElementType = "div">({
  as,
  style = {},
  asChild,
  ...props
}: PolymorphicComponentProps<T, GridContainerProps>) => {
  const Element = asChild ? Slot : as || "div";

  const tailwind = generateClassName(props.className);

  return (
    <Element
      className={tailwind}
      style={{
        ...getGridContainerStyles(style),
      }}
      {...props}
    >
      {props.children}
    </Element>
  );
};
