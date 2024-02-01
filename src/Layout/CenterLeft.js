import React from "react";
import { CenterLeftElement } from "./Layout.style";

const CenterLeft = ({ children, style, direction = false }) => {
  return (
    <CenterLeftElement style={style} direction={direction}>
      {children}
    </CenterLeftElement>
  );
};

export default CenterLeft;
