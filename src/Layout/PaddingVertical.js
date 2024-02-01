import React from "react";
import { PaddingVerticalElement } from "./Layout.style";

const PaddingVertical = ({ children, style, direction = false }) => {
  return (
    <PaddingVerticalElement style={style} direction={direction}>
      {children}
    </PaddingVerticalElement>
  );
};

export default PaddingVertical;
