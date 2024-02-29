import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";

type HeadingProps<T extends React.ElementType> = {
  size?: keyof typeof HeadingSizeMap;
} & PolymorphicComponentProps<T>;

const HeadingSizeMap = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  "2xl": "text-5xl",
};

export const Heading = <T extends React.ElementType = "h1">({
  as,
  size = "md",
  children,
  className,
  ...props
}: HeadingProps<T>) => {
  const Element = as || "h1";

  const tailwind = generateClassName("font-bold", HeadingSizeMap[size], className);

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
