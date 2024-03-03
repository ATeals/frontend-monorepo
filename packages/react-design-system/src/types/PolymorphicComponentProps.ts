// export type PolymorphicComponentProps<T extends React.ElementType> = {
//   as?: T;
//   ref?: PolymorphicRef<T>;
// } & React.ComponentPropsWithoutRef<T>;

export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProps<T extends React.ElementType, Props = {}> = {
  as?: T;
  ref?: React.ComponentPropsWithRef<T>["ref"];
} & Omit<React.ComponentPropsWithoutRef<T>, keyof Props> &
  Props;
