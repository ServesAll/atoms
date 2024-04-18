import React from "react";
import { BorderBottomElement } from "./Layout.style";

const BorderBottom = ({ children, style }) => {
  return (
    <BorderBottomElement style={{ ...style }}>{children}</BorderBottomElement>
  );
};

export default BorderBottom;
