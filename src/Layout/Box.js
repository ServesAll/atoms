import React from "react";
import { BoxElement } from "./Layout.style";

const Box = ({ children, color = "", style, direction = false, ...rest }) => {
  return (
    <BoxElement
      style={{ backgroundColor: color, ...style }}
      direction={direction}
      {...rest}
    >
      {children}
    </BoxElement>
  );
};

export default Box;
