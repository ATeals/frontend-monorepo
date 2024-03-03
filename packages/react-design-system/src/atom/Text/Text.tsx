import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";

type TextProps = {
  size?: keyof typeof TextSizeMap;
};

const TextSizeMap = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

export const Text = <T extends React.ElementType = "p">({
  as,
  size = "md",
  children,
  className,
  ...props
}: PolymorphicComponentProps<T, TextProps>) => {
  const Element = as || "p";

  const tailwind = generateClassName(TextSizeMap[size], className);

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
