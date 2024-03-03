import { CSSProperties } from "react";

export const getFlexStyles = (style: FlexStyles & Omit<CSSProperties, "direction">) => ({
  display: "flex",
  flexDirection: style.direction,
  justifyContent: style.justify || "center",
  alignItems: style.align || "center",
  ...{ ...style, direction: style.cssDirection },
});

export interface FlexStyles {
  direction?: "row" | "column";
  justify?:
    | "center"
    | "start"
    | "flex-start"
    | "end"
    | "flex-end"
    | "left"
    | "right"
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  align?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "inherit"
    | "initial"
    | "unset";
  cssDirection?: CSSProperties["direction"];
}
