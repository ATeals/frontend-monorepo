import { generateClassName } from "@/utils/generateClassName";
import { GridItemStyles, getGridItemStyles } from "./GridItem.styles";
import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { AsChildProps, Slot } from "@/common/Slot";

type GridItemProps = {
  style?: GridItemStyles & React.CSSProperties;
} & AsChildProps;

export const GridItem = <T extends React.ElementType = "div">({
  as,
  style = {},
  asChild,
  ...props
}: PolymorphicComponentProps<T, GridItemProps>) => {
  const Element = asChild ? Slot : as || "div";

  const tailwind = generateClassName(props.className);

  return (
    <Element
      className={tailwind}
      style={{
        ...getGridItemStyles(style),
      }}
      {...props}
    >
      {props.children}
    </Element>
  );
};
