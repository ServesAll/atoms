import React from "react";
import { PaddingBottomElement } from "./Layout.style";

const PaddingBottom = ({ children, style, direction = false }) => {
  return (
    <PaddingBottomElement style={style} direction={direction}>
      {children}
    </PaddingBottomElement>
  );
};

export default PaddingBottom;
