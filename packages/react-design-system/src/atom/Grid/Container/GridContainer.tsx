import { generateClassName } from "@/utils/generateClassName";
import { GridContainerStyles, getGridContainerStyles } from "./GridContainer.styles";

type GridContainerProps<T extends React.ElementType> = {
  style?: GridContainerStyles & React.CSSProperties;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "style">;

export const GridContainer = <T extends React.ElementType = "div">({
  as,
  style = {},
  ...props
}: GridContainerProps<T>) => {
  const Element = as || "div";

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
