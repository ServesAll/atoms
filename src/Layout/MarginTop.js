import React from "react";
import { MarginTopElement } from "./Layout.style";

const MarginTop = ({ children, style, direction = false }) => {
  return (
    <MarginTopElement style={style} direction={direction}>
      {children}
    </MarginTopElement>
  );
};

export default MarginTop;
