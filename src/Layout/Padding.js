import React from "react";
import { PaddingElement } from "./Layout.style";

const Padding = ({ children, style, direction = false }) => {
  return (
    <PaddingElement style={style} direction={direction}>
      {children}
    </PaddingElement>
  );
};

export default Padding;
