import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";

type RingProps<T extends React.ElementType> = {
  size?: keyof typeof RingSizeMap;
  fill?: boolean;
  variant?: keyof (typeof RingVariantMap)["ring"];
} & PolymorphicComponentProps<T>;

const RingSizeMap = {
  sm: "  w-[2rem] h-[2rem]",
  md: "  w-[3.5rem] h-[3.5rem]",
  lg: " w-[4rem] h-[4rem]",
  xl: " w-[5rem] h-[5rem]",
  "2xl": " w-[6rem] h-[6rem]",
};

const RingVariantMap = {
  fill: {
    default: "bg-gray-400",
    warning: "bg-red-300",
    primary: "bg-teal-300",
  },
  ring: {
    default: "ring-2 ring-gray-400",
    warning: "ring-2 ring-red-300",
    primary: "ring-2 ring-teal-300",
  },
};

export const Ring = <T extends React.ElementType = "div">({
  as,
  size = "md",
  variant = "default",
  fill = false,
  children,
  className,
  ...props
}: RingProps<T>) => {
  const Element = as || "div";

  const tailwind = generateClassName(
    "rounded-[50%] flex justify-center items-center overflow-hidden",
    fill ? RingVariantMap.fill[variant] : RingVariantMap.ring[variant],
    RingSizeMap[size],
    className
  );

  return (
    <Element className={tailwind} {...props}>
      {children}
    </Element>
  );
};
