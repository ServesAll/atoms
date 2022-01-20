import React from "react";
import { MarginRightElement } from "./Layout.style";

const MarginRight = ({ children, style, direction = false }) => {
  return (
    <MarginRightElement style={style} flexDirection={direction}>
      {children}
    </MarginRightElement>
  );
};

export default MarginRight;
