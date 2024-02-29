export interface GridItemStyles {
  justify?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "normal"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe start"
    | "safe end"
    | "safe center"
    | "unsafe start"
    | "unsafe end"
    | "unsafe center";
  align?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe start"
    | "safe end"
    | "safe center"
    | "unsafe start"
    | "unsafe end"
    | "unsafe center";
  column?: number;
  row?: number;
}

export const getGridItemStyles = (style: GridItemStyles & React.CSSProperties) => ({
  justifySelf: style.justify || "center",
  alignSelf: style.align || "center",
  gridColumn: `${style.column} span`,
  gridRow: `${style.row} span`,
  ...style,
});
