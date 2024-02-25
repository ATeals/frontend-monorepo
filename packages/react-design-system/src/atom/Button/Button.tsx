import { PolymorphicComponentProps, PolymorphicRef } from "@/types/PolymorphicComponentProps";
import { generateClassName } from "@/utils/generateClassName";
import React, { forwardRef } from "react";

type ButtonStyleType = "outline" | "none" | "cancel" | "primary";

type ButtonProps<T extends React.ElementType> = {
  size?: keyof typeof ButtonSizeMap;
  variant?: ButtonStyleType;
} & PolymorphicComponentProps<T>;

type ForwardRefButtonComopnent = <T extends React.ElementType = "button">(
  props: ButtonProps<T>,
  ref: PolymorphicRef<T>
) => React.ReactNode;

const ButtonSizeMap = {
  sm: " w-[4rem] h-[2rem] text-sm rounded-sm",
  md: " w-[6rem] h-[3rem] text-md rounded-md",
  lg: " w-[8rem] h-[4rem] text-xl rounded-lg",
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
    variant === "outline" && " border border-gray-300 ",
    variant === "primary" && " bg-teal-400 text-white",
    variant === "cancel" && "bg-red-400 text-white",
    props.disabled && "bg-gray-300",
    className
  );

  return (
    <Element ref={ref} className={variant === "none" ? className : tailwind} {...props}>
      {children}
    </Element>
  );
};

export const Button: ForwardRefButtonComopnent = forwardRef(ButtonComponet);
