import React from "react";
import { MarginHorizontalElement } from "./Layout.style";

const MarginHorizontal = ({ children, style, direction = false }) => {
  return (
    <MarginHorizontalElement style={style} direction={direction}>
      {children}
    </MarginHorizontalElement>
  );
};

export default MarginHorizontal;
