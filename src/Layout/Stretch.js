import React from "react";
import { StretchElement } from "./Layout.style";

const Stretch = ({ children, style, direction = false }) => {
  return (
    <StretchElement style={style} direction={direction}>
      {children}
    </StretchElement>
  );
};

export default Stretch;
