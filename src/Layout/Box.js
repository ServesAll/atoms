import React from "react";
import { BoxElement } from "./Layout.style";

const Box = ({ children, color = "", style, direction = false }) => {
  return (
    <BoxElement
      style={{ backgroundColor: color, ...style }}
      direction={direction}
    >
      {children}
    </BoxElement>
  );
};

export default Box;
