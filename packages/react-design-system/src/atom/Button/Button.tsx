import { AsChildProps, Slot } from "@/common/Slot";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";
import React, { forwardRef } from "react";

type ButtonProps = {
  size?: keyof typeof ButtonSizeMap;
  variant?: keyof typeof ButtonVariantMap;
} & AsChildProps;

type ForwardRefButtonComopnent = <T extends React.ElementType = "button">(
  props: PolymorphicComponentProps<T, ButtonProps>,
  ref: PolymorphicRef<T>
) => React.ReactNode;

const ButtonSizeMap = {
  sm: " w-[4rem] h-[2rem] text-sm rounded-sm",
  md: " w-[4rem] h-[2.5rem] text-md rounded-md",
  lg: " w-[4rem] h-[3rem] text-xl rounded-lg",
};

const ButtonVariantMap = {
  outline: "border border-gray-300",
  primary: " bg-teal-400 text-white",
  warning: "bg-red-400 text-white",
  none: "",
};

export const ButtonComponent = <T extends React.ElementType = "button">(
  {
    as,
    style,
    children,
    asChild,
    size = "md",
    variant = "primary",
    ...props
  }: PolymorphicComponentProps<T, ButtonProps>,
  ref: PolymorphicRef<T>
) => {
  const Element = asChild ? Slot : as || "button";

  const tailwind = generateClassName(
    "cursor-pointer flex justify-center items-center",
    ButtonSizeMap[size],
    ButtonVariantMap[variant],
    props.disabled && "bg-gray-400",
    props.className
  );

  return (
    <Element ref={ref} className={variant === "none" ? props.className : tailwind} {...props}>
      {children}
    </Element>
  );
};

export const Button: ForwardRefButtonComopnent = forwardRef(ButtonComponent);
