import React from "react";
import { PaddingTopElement } from "./Layout.style";

const PaddingTop = ({ children, style, direction = false }) => {
  return (
    <PaddingTopElement style={style} flexDirection={direction}>
      {children}
    </PaddingTopElement>
  );
};

export default PaddingTop;
