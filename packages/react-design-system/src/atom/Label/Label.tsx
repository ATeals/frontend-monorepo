import { PolymorphicComponentProps } from "@/types/PolymorphicComponentProps";

type LabelProps = {
  isRequired?: boolean;
};

export const Label = ({
  id,
  children,
  isRequired = false,
  ...props
}: PolymorphicComponentProps<"label", LabelProps>) => {
  return (
    <label {...props} htmlFor={id} style={{ display: "flex", ...props.style }}>
      {children} {isRequired && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
