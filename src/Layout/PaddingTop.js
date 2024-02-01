import React from "react";
import { PaddingTopElement } from "./Layout.style";

const PaddingTop = ({ children, style, direction = false }) => {
  return (
    <PaddingTopElement style={style} direction={direction}>
      {children}
    </PaddingTopElement>
  );
};

export default PaddingTop;
