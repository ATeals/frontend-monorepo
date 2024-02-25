export type PolymorphicComponentProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];
