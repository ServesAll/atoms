import React from "react";
import { MarginVerticalElement } from "./Layout.style";

const MarginVertical = ({ children, style, direction = false }) => {
  return (
    <MarginVerticalElement style={style} direction={direction}>
      {children}
    </MarginVerticalElement>
  );
};

export default MarginVertical;
