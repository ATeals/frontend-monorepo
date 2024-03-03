import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";

type LableProps = {
  isRequired?: boolean;
};

export const Lable = ({
  id,
  children,
  isRequired = false,
  ...props
}: PolymorphicComponentProps<"label", LableProps>) => {
  return (
    <label {...props} htmlFor={id} style={{ display: "flex", ...props.style }}>
      {children} {isRequired && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
