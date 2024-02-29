import { PolymorphicComponentProps, PolymorphicRef } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";
import React, { forwardRef } from "react";

type ButtonProps<T extends React.ElementType> = {
  size?: keyof typeof ButtonSizeMap;
  variant?: keyof typeof ButtonVariantMap;
} & PolymorphicComponentProps<T>;

type ForwardRefButtonComopnent = <T extends React.ElementType = "button">(
  props: ButtonProps<T>,
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

export const ButtonComponet = <T extends React.ElementType = "button">(
  {
    as,
    style,
    children,
    className = "",
    size = "md",
    variant = "primary",
    ...props
  }: ButtonProps<T>,
  ref: PolymorphicRef<T>
) => {
  const Element = as || "button";

  const tailwind = generateClassName(
    "cursor-pointer flex justify-center items-center",
    ButtonSizeMap[size],
    ButtonVariantMap[variant],
    props.disabled && "bg-gray-400",
    className
  );

  return (
    <Element ref={ref} className={variant === "none" ? className : tailwind} {...props}>
      {children}
    </Element>
  );
};

export const Button: ForwardRefButtonComopnent = forwardRef(ButtonComponet);
