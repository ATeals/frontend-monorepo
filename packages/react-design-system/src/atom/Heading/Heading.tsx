import { AsChildProps, Slot } from "@/common/Slot";
import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";

type HeadingProps = {
  size?: keyof typeof HeadingSizeMap;
} & AsChildProps;

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
  asChild,
  ...props
}: PolymorphicComponentProps<T, HeadingProps>) => {
  const Element = asChild ? Slot : as || "h1";

  const tailwind = generateClassName("font-bold", HeadingSizeMap[size], className);

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
