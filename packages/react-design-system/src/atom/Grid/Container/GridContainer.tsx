import { generateClassName } from "@/utils/generateClassName";
import { GridContainerStyles, getGridContainerStyles } from "./GridContainer.styles";
import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";

type GridContainerProps = {
  style?: GridContainerStyles & React.CSSProperties;
};

export const GridContainer = <T extends React.ElementType = "div">({
  as,
  style = {},
  ...props
}: PolymorphicComponentProps<T, GridContainerProps>) => {
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
