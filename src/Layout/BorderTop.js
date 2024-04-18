import React from "react";
import { BorderTopElement } from "./Layout.style";

const BorderTop = ({ children, style }) => {
  return <BorderTopElement style={{ ...style }}>{children}</BorderTopElement>;
};

export default BorderTop;
