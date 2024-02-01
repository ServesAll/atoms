import React from "react";
import { CenterRightElement } from "./Layout.style";

const CenterRight = ({ children, style, direction = false }) => {
  return (
    <CenterRightElement style={style} direction={direction}>
      {children}
    </CenterRightElement>
  );
};

export default CenterRight;
