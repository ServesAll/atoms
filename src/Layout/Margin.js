import React from "react";
import { MarginElement } from "./Layout.style";

const Margin = ({ children, style, direction = false }) => {
  return (
    <MarginElement style={style} direction={direction}>
      {children}
    </MarginElement>
  );
};

export default Margin;
