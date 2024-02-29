import { generateClassName } from "@/utils/generateClassName";
import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  size?: keyof typeof InputSizeMap;
  variant?: keyof typeof InputVariantMap;
  label?: string;
  subText?: string;
  icon?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<"input">, "size">;

const InputSizeMap = {
  sm: " w-[18rem] h-[2rem] text-sm rounded-sm",
  md: " w-[18rem] h-[2.5rem] text-md rounded-md",
  lg: " w-[18rem] h-[3rem] text-xl rounded-lg",
};

const InputVariantMap = {
  default: "bg-gray-100 px-2 focus:bg-inherit focus:border-2",
  outline: "border-2 px-2",
  warning: "bg-red-300 px-2 focus:bg-inherit focus:border-2 focus:border-red-300",
  none: "",
  underline: "border-b-2 rounded-none",
};

export const Input = ({
  type = "text",
  size = "md",
  variant = "default",
  className,
  ...props
}: InputProps) => {
  const tailwind = generateClassName(InputVariantMap[variant], InputSizeMap[size], className);

  return (
    <>
      <input className={tailwind} type={type} {...props} />
    </>
  );
};
