import { generateClassName } from "@/utils/generateClassName";
import { ComponentPropsWithoutRef } from "react";

type DividerLineProps = {
  direction?: "horizontal" | "vertical";
} & ComponentPropsWithoutRef<"div">;

export const DividerLine = ({
  direction = "horizontal",
  className,
  ...props
}: DividerLineProps) => {
  const tailwind = generateClassName(
    "border-gray-300",
    direction === "horizontal" && `border-b-2 w-full`,
    direction === "vertical" && `border-l-2 h-full`,
    className
  );

  return <div className={tailwind} {...props} />;
};
