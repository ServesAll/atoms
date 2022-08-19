import React from "react";
import { PaddingRightElement } from "./Layout.style";

const PaddingRight = ({ children, style, direction = false }) => {
  return (
    <PaddingRightElement style={style} flexDirection={direction}>
      {children}
    </PaddingRightElement>
  );
};

export default PaddingRight;
