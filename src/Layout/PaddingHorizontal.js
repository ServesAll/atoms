import React from "react";
import { PaddingHorizontalElement } from "./Layout.style";

const PaddingHorizontal = ({ children, style, direction = false }) => {
  return (
    <PaddingHorizontalElement style={style} direction={direction}>
      {children}
    </PaddingHorizontalElement>
  );
};

export default PaddingHorizontal;
