export interface GridContainerStyles {
  gap?: number | string | { x: number | string; y: number | string };
  column?: number;
  row?: number;
}

export const getGridContainerStyles = (style: GridContainerStyles & React.CSSProperties) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${style.column}, 1fr)`,
  gridTemplateRows: `repeat(${style.row}, 1fr)`,
  ...style,
});
