import { ComponentPropsWithoutRef } from "react";

type LableProps = {
  isRequired?: boolean;
} & ComponentPropsWithoutRef<"label">;

export const Lable = ({ id, children, isRequired = false, ...props }: LableProps) => {
  return (
    <label {...props} htmlFor={id} style={{ display: "flex", ...props.style }}>
      {children} {isRequired && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
