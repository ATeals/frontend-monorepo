import { generateClassName } from "@/utils/generateClassName";
import { GridItemStyles, getGridItemStyles } from "./GridItem.styles";

type GridItemProps<T extends React.ElementType> = {
  style?: GridItemStyles & React.CSSProperties;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "style">;

export const GridItem = <T extends React.ElementType = "div">({
  as,
  style = {},
  ...props
}: GridItemProps<T>) => {
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
