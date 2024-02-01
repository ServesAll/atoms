import React from "react";
import { PaddingLeftElement } from "./Layout.style";

const PaddingLeft = ({ children, style, direction = false }) => {
  return (
    <PaddingLeftElement style={style} direction={direction}>
      {children}
    </PaddingLeftElement>
  );
};

export default PaddingLeft;
