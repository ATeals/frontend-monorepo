import { generateClassName } from "@/utils/generateClassName";
import { GridItemStyles, getGridItemStyles } from "./GridItem.styles";
import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";

type GridItemProps = {
  style?: GridItemStyles & React.CSSProperties;
};

export const GridItem = <T extends React.ElementType = "div">({
  as,
  style = {},
  ...props
}: PolymorphicComponentProps<T, GridItemProps>) => {
  const Element = as || "div";

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
